module.exports = {
  apps: [{
    name: 'sensear-prod',
    script: 'server.js',
    cwd: 'C:/Users/jef/Documents/Antigravity',
    watch: false,
    autorestart: true,
    max_restarts: 5,
    min_uptime: '10s',
    env: {
      NODE_ENV: 'production',
      PORT: 3000,
      HOSTNAME: '0.0.0.0'
    }
  }]
};