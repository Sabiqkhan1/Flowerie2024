module.exports = {
    apps: [{
        name: 'flowerie-api',
        script: 'dist/app.js',
        instances: 'max',
        exec_mode: 'cluster',
        autorestart: true,
        watch: false,
        max_memory_restart: '1G',
        env: {
            NODE_ENV: 'production'
        }
    }]
}; 