#!/bin/sh
npm install
npm run build
npm prune --omit=dev
