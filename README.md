# Floor Bounce Calculator

Installable web app (PWA) for the Floor Bounce Method on USOIL and UKOIL.

## Files
- index.html : the calculator
- manifest.json : app name, colors, icons
- sw.js : service worker (offline use)
- icon-180.png, icon-192.png, icon-512.png : app icons

## Deploy on GitHub Pages
1. Open your repo on github.com, tap Add file > Upload files.
2. Upload ALL files above to the repo root (not inside a folder). Commit.
3. Settings > Pages > Source: Deploy from a branch > Branch: main, folder: / (root) > Save.
4. Wait 1 to 2 minutes. Your link will be https://YOUR-USERNAME.github.io/YOUR-REPO/

## Install on iPhone
1. Open the link in Safari (must be Safari).
2. Tap Share > Add to Home Screen > Add.
3. Open it from the home screen. It runs full screen and works offline after the first load.

## Updating later
Edit index.html, then change CACHE='fbm-v1' to 'fbm-v2' in sw.js so phones fetch the new version.
