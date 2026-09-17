# Guten Crust

Express/TypeScript gateway on port **8000**. Its active routes are mounted at /api/guten and forward to Guten Datalake at http://localhost:8005/guten. Persistence stays in Datalake. Current logging uses Morgan; authentication is not enforced. API response and mutation inconsistencies remain application follow-up work.

## Local development

From the sibling coordination repository:

```bash
cd ../guten
make run SERVICE=crust
make check SERVICE=crust
```

The launcher uses the existing local ts-node dependency. Builds use TypeScript compilation. Dependencies must already be installed. PORT and GUTEN_DATALAKE_URL are configured through the local environment/.env; do not commit credentials.

Active code is in src/routes/gutenDatalakeRoutes.ts and src/services/gutenDatalakeService.ts, mounted by src/routes/index.ts. Empty historical publisher/sites/auth route placeholders have been removed.

See [local operations](../guten/README.md) and [storage and Git conventions](../guten/docs/storage-and-git.md).

## Project structure

```text
src/routes/ — frontend API routes
src/services/ — Datalake HTTP client
src/middlewares/ — error normalization
src/config/ — environment and logging
```
