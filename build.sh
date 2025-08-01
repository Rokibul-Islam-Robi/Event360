#!/bin/bash
cd client
npm install --legacy-peer-deps
chmod +x node_modules/.bin/vite
npm run build 