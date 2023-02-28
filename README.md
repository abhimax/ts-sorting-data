# TypeScript Sorting Data App

## Steps to setup the project with automate build

1. create src dir and make the index.ts file in it
2. create build dir
3. `tsc init` <= create tsconfig file
4. uncomment and give ./src for rootDir and ./build for the outDir
5. `npm init -y` <= create package.json
6. add below 3 scripts to package json

- `"start:build": "tsc -w"` <= start compiler and watch more
- `"start:run": "nodemon build/index.js"` <= build all files
- `"start": "concurrently npm:start:\*"` <= run above both scripts together
