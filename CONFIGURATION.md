# Configuration Management

## Source Control
- **Repository:** [GitHub](https://github.com/bk-hash/CCSP-Exam)
- **Branching:** Main branch for production, feature branches for development

## Build & Deployment
- **Build:** `npm run build`
- **Predeploy:** Runs build before deployment
- **Deploy:** `npm run deploy` (uses `gh-pages` to publish `build/` directory)

## Versioning
- Follows semantic versioning in `package.json`