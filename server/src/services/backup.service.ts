import { spawn } from 'child_process';
import path from 'path';
import fs from 'fs';
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import logger from './logger.service';

class BackupService {
    private s3Client: S3Client;
    private backupDir: string;

    constructor() {
        this.s3Client = new S3Client({
            region: process.env.AWS_REGION!,
            credentials: {
                accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
                secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!
            }
        });
        this.backupDir = path.join(__dirname, '../../backups');
    }

    async createBackup(): Promise<string> {
        const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
        const filename = `backup-${timestamp}.gz`;
        const filepath = path.join(this.backupDir, filename);

        // Ensure backup directory exists
        if (!fs.existsSync(this.backupDir)) {
            fs.mkdirSync(this.backupDir, { recursive: true });
        }

        try {
            await this.runMongoDump(filepath);
            await this.uploadToS3(filepath, filename);
            this.cleanupOldBackups();
            
            logger.info(`Backup created successfully: ${filename}`);
            return filename;
        } catch (error) {
            logger.error('Backup failed:', error);
            throw error;
        }
    }

    private runMongoDump(filepath: string): Promise<void> {
        return new Promise((resolve, reject) => {
            const mongodump = spawn('mongodump', [
                `--uri=${process.env.MONGODB_URI}`,
                '--gzip',
                `--archive=${filepath}`
            ]);

            mongodump.on('close', (code) => {
                if (code === 0) resolve();
                else reject(new Error(`mongodump exited with code ${code}`));
            });

            mongodump.on('error', reject);
        });
    }

    private async uploadToS3(filepath: string, filename: string): Promise<void> {
        const fileContent = fs.readFileSync(filepath);
        
        await this.s3Client.send(new PutObjectCommand({
            Bucket: process.env.AWS_BACKUP_BUCKET!,
            Key: `mongodb-backups/${filename}`,
            Body: fileContent
        }));
    }

    private cleanupOldBackups(): void {
        const files = fs.readdirSync(this.backupDir);
        const maxBackups = 5;

        if (files.length > maxBackups) {
            files
                .map(file => ({ file, time: fs.statSync(path.join(this.backupDir, file)).mtime }))
                .sort((a, b) => b.time.getTime() - a.time.getTime())
                .slice(maxBackups)
                .forEach(({ file }) => {
                    fs.unlinkSync(path.join(this.backupDir, file));
                    logger.info(`Deleted old backup: ${file}`);
                });
        }
    }
}

export const backupService = new BackupService(); 