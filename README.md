# TypeScript Sorting Data App

## Tech stack

TypeScript

## Steps to setup the project with automate build

- create src dir and make the index.ts file in it
- create build dir
- tsc init <= create tsconfig file
- uncomment and give ./src for rootDir and ./build for the outDir
- npm init -y <= create package.json
- add below 3 scripts to package json
  "scripts": {
  "start:build": "tsc -w", <= start compiler and watch more
  "start:run": "nodemon build/index.js", <= build all files
  "start": "concurrently npm:start:\*" <= run above both scripts together
  },
