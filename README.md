# security-demo-repo

This starter repository is designed to generate GitHub security findings from both CodeQL and Dependabot in a controlled demo context.

## Included files

- `.github/workflows/codeql.yml` enables CodeQL scanning for JavaScript/TypeScript.
- `.github/dependabot.yml` enables Dependabot version updates for npm and GitHub Actions.
- `package.json` intentionally pins older dependency versions that are likely to produce Dependabot alerts.
- `src/app.js` contains intentionally insecure JavaScript patterns that are likely to trigger CodeQL alerts.

## How to use

1. Create a new GitHub repository.
2. Upload these files to the repository root.
3. Enable GitHub Advanced Security or Code Scanning if required by your plan.
4. Push to `main` and wait for the CodeQL workflow to run.
5. Check the repository's **Security** tab for CodeQL and Dependabot alerts.

## Important

Do not deploy or run this code in any real environment. It is intentionally vulnerable and is meant only for isolated demonstrations or training.
