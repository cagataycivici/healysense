import type { Metadata } from 'next';
import './fonts/fonts.css';
import './globals.css';

export const metadata: Metadata = {
    title: 'HealySense | AI-Powered Medical Diagnostics',
    description: 'HealySense combines human expertise with artificial intelligence for faster, safer medical diagnoses.',
    openGraph: {
        title: 'HealySense | AI-Powered Medical Diagnostics',
        description: 'HealySense combines human expertise with artificial intelligence for faster, safer medical diagnoses.'
    }
};

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className="antialiased pb-6 relative" suppressHydrationWarning>
                {children}
            </body>
        </html>
    );
}
