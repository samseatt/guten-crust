# Guten Crust

Express/TypeScript gateway on port **8000**. Its active routes are mounted at /api/guten and forward to Guten Datalake at http://localhost:8005/guten. Persistence stays in Datalake. Current logging uses Morgan; authentication is not enforced.

## Local development

From the sibling coordination repository:

```bash
cd ../guten
make run SERVICE=crust
make check SERVICE=crust
```

The launcher uses the existing local ts-node dependency. Builds use TypeScript compilation. Dependencies must already be installed. `PORT`, `GUTEN_DATALAKE_URL`, and comma-separated `CORS_ORIGINS` are configured through the local environment/`.env`; see `.env.example`. The default browser origins are localhost:3000 and localhost:3001. CORS controls browser access and is not authentication. Do not commit credentials.

Active code is in src/routes/gutenDatalakeRoutes.ts and src/services/gutenDatalakeService.ts, mounted by src/routes/index.ts. Empty historical publisher/sites/auth route placeholders have been removed.

See [local operations](../guten/README.md) and [storage and Git conventions](../guten/docs/storage-and-git.md).

## Project structure

```text
src/routes/ — frontend API routes
src/services/ — Datalake HTTP client
src/middlewares/ — error normalization
src/config/ — environment and logging
```

[Editorial references and notes](../guten-datalake/docs/editorial-refs-and-notes.md) support scoped CRUD, including `PUT /notes/:id`. Both deletion endpoints require `site`, `section`, and `page` query parameters.

See [per-site publishing](../guten-datalake/docs/publishing.md) for the editor workflow, API, migration, and initial publication seeding. Portal/View Draft reads draft; Guten Sites reads published content only.

`/health/live` checks the process. `/health/ready` verifies Datalake readiness with a bounded timeout and returns 503 when unavailable. Request payload debug logging is removed. Morgan writes access logs to stdout so the supervisor/container can capture and rotate them; the old access.log is no longer appended. See the [acceptance guide](../guten/docs/testing.md).

## Containers

The Dockerfile and .dockerignore package this service without local secrets, dumps, installed dependencies or content media. Build/start it using the sibling coordination repository’s [Docker Compose guide](../guten/docs/docker.md). The container rehearsal uses a separate empty database and alternate localhost ports.
