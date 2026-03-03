import { defineConfig } from '@siteproof/sdk';

export default defineConfig({
  projectId: '69a71b7048f0f8e14bd67f02',
  payloadUrl: process.env.NEXT_PUBLIC_PAYLOAD_URL ?? 'http://localhost:3001',
  editorOrigin: process.env.NEXT_PUBLIC_SITEPROOF_URL ?? 'https://app.siteproof.dev',
});
