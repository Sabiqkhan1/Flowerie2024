import { cleanEnv, str, port, url } from 'envalid';

export default cleanEnv(process.env, {
    NODE_ENV: str({ choices: ['development', 'test', 'production'] }),
    PORT: port({ default: 5000 }),
    MONGODB_URI: url(),
    JWT_SECRET: str(),
    AWS_REGION: str(),
    AWS_ACCESS_KEY_ID: str(),
    AWS_SECRET_ACCESS_KEY: str(),
    AWS_BUCKET_NAME: str(),
    STRIPE_SECRET_KEY: str(),
    SMTP_HOST: str(),
    SMTP_PORT: str(),
    SMTP_USER: str(),
    SMTP_PASS: str(),
    EMAIL_FROM: str()
}); 