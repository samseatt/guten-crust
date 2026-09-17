import morgan from 'morgan';

// Let the local supervisor or container runtime capture and rotate access logs.
// Do not record request bodies, credentials, or editorial content.
export const logger = morgan('combined');
