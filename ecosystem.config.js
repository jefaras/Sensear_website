module.exports = {
  apps: [{
    name: 'next-dev',
    script: 'npx',
    args: 'next dev',
    cwd: 'C:/Users/jef/Documents/Antigravity',
    watch: false,
    autorestart: true,
    max_restarts: 5,
    min_uptime: '10s',
    env: {
      NODE_ENV: 'development',
      PORT: 3000
    }
  }]
};