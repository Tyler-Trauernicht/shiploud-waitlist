import { defineConfig } from '@siteproof/sdk';

export default defineConfig({
  projectId: '69a901d3a70fd345502d389a',
  editorOrigin: process.env.NEXT_PUBLIC_SITEPROOF_URL ?? 'https://app.siteproof.dev',
});
