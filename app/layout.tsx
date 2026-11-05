import type { Metadata, Viewport } from 'next';
import './fonts/fonts.css';
import './globals.css';

const SITE_URL = 'https://www.healysense.ai';

export const metadata: Metadata = {
    metadataBase: new URL(SITE_URL),
    applicationName: 'HealySense',
    title: 'Healysense | AI-Powered Medical Diagnostics',
    description: 'Healysense combines human expertise with artificial intelligence for faster, safer medical diagnoses.',
    openGraph: {
        type: 'website',
        url: SITE_URL,
        siteName: 'HealySense',
        title: 'Healysense | AI-Powered Medical Diagnostics',
        description: 'Healysense combines human expertise with artificial intelligence for faster, safer medical diagnoses.'
    }
};

export const viewport: Viewport = {
    themeColor: '#5A23E7'
};

// Tells Google the site name and official logo (shown in search results / knowledge panel).
const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
        {
            '@type': 'Organization',
            '@id': `${SITE_URL}/#organization`,
            name: 'HealySense',
            url: SITE_URL,
            logo: `${SITE_URL}/images/healysense-logo.png`
        },
        {
            '@type': 'WebSite',
            '@id': `${SITE_URL}/#website`,
            name: 'HealySense',
            url: SITE_URL,
            publisher: { '@id': `${SITE_URL}/#organization` }
        }
    ]
};

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
                <link rel="icon" type="image/x-icon" href="/favicon/favicon.ico" sizes="any" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
                <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="192x192" href="/favicon/android-chrome-192x192.png" />
                <link rel="icon" type="image/png" sizes="512x512" href="/favicon/android-chrome-512x512.png" />
                <link rel="manifest" href="/site.webmanifest" />
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
            </head>
            <body className="relative pb-6 antialiased" suppressHydrationWarning>
                {children}
            </body>
        </html>
    );
}
