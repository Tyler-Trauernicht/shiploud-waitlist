"use client";

import './siteproof.config';
import { SiteProofProvider } from '@siteproof/react';

export function SiteProofSetup({ children }: { children: React.ReactNode }) {
  return <SiteProofProvider>{children}</SiteProofProvider>;
}
