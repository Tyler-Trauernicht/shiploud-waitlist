import { defineConfig } from '@siteproof/sdk';

export default defineConfig({
  projectId: '69a88e0ca1b3e1ba3db62bf2',
  editorOrigin: process.env.NEXT_PUBLIC_SITEPROOF_URL ?? 'https://app.siteproof.dev',
});
