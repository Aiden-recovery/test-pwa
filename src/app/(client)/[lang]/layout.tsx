import {Metadata, Viewport} from 'next';
import {ReactNode} from 'react';

interface LayoutProps {
  children: ReactNode;
  params: { lang: string };
  progressBar: ReactNode;
}

export default function Layout({
  children,
  params: { lang },
  progressBar,
}: LayoutProps) {
  return (
    <html
      lang={lang}
      suppressHydrationWarning
    >
      {/*<head>*/}
      {/*  <link*/}
      {/*    crossOrigin="use-credentials"*/}
      {/*    href="/manifest.webmanifest"*/}
      {/*    rel="manifest"*/}
      {/*  />*/}
      {/*</head>*/}

      <body
      >
            {children}
      </body>
    </html>
  );
}

export const generateMetadata = ({
  params: { lang },
}: LayoutProps): Metadata => {
  const enMetadata = {
    description: 'All about Sleep, Tech, and Life',
    title: 'Asleep Feed',
  };

  const koMetadata = {
    description: '수면과 슬립테크에 대한 모든것',
    title: 'Asleep Feed',
  };

  const metadata = lang === 'en' ? enMetadata : koMetadata;

  return {
    metadataBase: new URL('https://test-pwa-mauve.vercel.app'),
    ...metadata,
  };
};

export const viewport: Viewport = {
  initialScale: 1,
  maximumScale: 1,
  width: '1520',
};
