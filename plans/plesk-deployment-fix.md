# Plesk Deployment Fix Plan

## Problem Summary

1. **100 zombie Node.js processes** were spawned, exhausting server resources
2. **Plesk not running `npm run build`** after Git pull, causing outdated content
3. **No automated deployment workflow** - manual steps required each time

## Solution

### Part 1: Limit Next.js Worker Threads

Add environment variable to Plesk Node.js settings:
```
NEXT_WORKER_COUNT=1
```

This limits Next.js to use only 1 worker thread instead of spawning multiple processes.

**Note:** You already have `NEXT_WORKER_COUNT: 2` in Plesk. Change it to `1`.

### Part 2: Configure Plesk Git Post-Deploy Command

In Plesk:
1. Go to **Websites & Domains** → **Git**
2. Find **"Additional deployment actions"** or **"Post-deploy commands"**
3. Add:
   ```bash
   npm install && npm run build
   ```
4. Save

### Part 3: Alternative - Add Build Script to package.json

If Plesk doesn't have post-deploy commands, we can add a `postinstall` script:

```json
"scripts": {
  "postinstall": "npm run build"
}
```

This will automatically run `npm run build` after `npm install`.

### Part 4: Update next.config.mjs for Production

Add experimental worker configuration:

```javascript
experimental: {
  workerThreads: false,
  cpus: 1,
}
```

## Files to Update

1. `next.config.mjs` - Add worker thread limits
2. `package.json` - Add postinstall script (optional)
3. Plesk environment variables - Set `NEXT_WORKER_COUNT=1`
4. Plesk Git settings - Add post-deploy command

## Deployment Workflow After Fix

1. Make changes locally
2. Push to Git
3. Plesk automatically:
   - Pulls latest code
   - Runs `npm install`
   - Runs `npm run build` (via postinstall or post-deploy)
   - Restarts Node.js app
4. Website updated!

## Immediate Action Required

1. **Update Plesk environment variable**: Change `NEXT_WORKER_COUNT` from `2` to `1`
2. **Push latest code to Git** (I've already built locally)
3. **Configure post-deploy command in Plesk Git settings**
4. **Trigger redeployment**
