import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import Script from 'next/script';

import Sidebar from '@/src/components/Sidebar';
import '../index.css';

export const metadata: Metadata = {
  title: 'Smart Home AI - Frontend',
  description: 'Smart House AI frontend Service.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Script src="/config.js" strategy="beforeInteractive" />
        <div className="relative flex flex-col-reverse md:flex-row h-[100dvh] w-full overflow-hidden bg-slate-50 dark:bg-slate-950 font-sans text-slate-900 dark:text-slate-100">
          <Sidebar />
          <main className="flex-1 min-h-0 overflow-y-auto">{children}</main>
        </div>
      </body>
    </html>
  );
}
