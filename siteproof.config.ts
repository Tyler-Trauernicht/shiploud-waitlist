import { defineConfig } from '@siteproof/sdk';

export default defineConfig({
  projectId: '69a848af4a63ddb9de5d7d89',
  editorOrigin: process.env.NEXT_PUBLIC_SITEPROOF_URL ?? 'https://app.siteproof.dev',
});
