import type { Metadata } from 'next';
import './fonts/fonts.css';
import './globals.css';

export const metadata: Metadata = {
    title: 'HealySense | AI-Powered Medical Diagnostics',
    description: 'Healysense combines human expertise with artificial intelligence for faster, safer medical diagnoses.',
    openGraph: {
        title: 'Healysense | AI-Powered Medical Diagnostics',
        description: 'Healysense combines human expertise with artificial intelligence for faster, safer medical diagnoses.'
    }
};

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <link rel="icon" type="image/x-icon" href="/favicon/favicon.ico" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
                <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="192x192" href="/favicon/android-chrome-192x192.png" />
                <link rel="icon" type="image/png" sizes="512x512" href="/favicon/android-chrome-512x512.png" />
            </head>
            <body className="relative pb-6 antialiased" suppressHydrationWarning>
                {children}
            </body>
        </html>
    );
}
