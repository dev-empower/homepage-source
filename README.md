# Project Build & Deployment Guide

## Build & Deploy Steps

1. **Modify the code as needed.**
2. **Run the build command:**
   ```sh
   npm run build
   ```
   This will generate a `dist` folder containing the built files.
3. **Copy the `dist` folder to the `docs` directory:**
   ```sh
   cp -r dist docs
   ```
4. **Commit and push changes to the repository:**
   ```sh
   git add .
   git commit -m "Build and update docs"
   git push
   ```

## Notes
- The homepage is rendered from the `docs` directory.
- Ensure all necessary changes are made before running `npm run build`.
- Verify the deployment after pushing changes to the repository.
