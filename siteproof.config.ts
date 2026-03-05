import { defineConfig } from '@siteproof/sdk';

export default defineConfig({
  projectId: '69a902bea70fd345502d3926',
  editorOrigin: process.env.NEXT_PUBLIC_SITEPROOF_URL ?? 'https://app.siteproof.dev',
});
