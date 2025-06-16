import './globals.css';
    import type { Metadata } from 'next';
    import { Inter } from 'next/font/google';
    import { ThemeProvider } from 'next-themes';
    import { cn } from '@/lib/utils';

    const inter = Inter({ subsets: ['latin'] });

    export const metadata: Metadata = {
      title: 'AI for the Workplace',
      description: 'A presentation on AI for the Workplace',
    };

    export default function RootLayout({
      children,
    }: {
      children: React.ReactNode;
    }) {
      return (
        <html lang="en" suppressHydrationWarning>
          <body className={cn(inter.className, 'overflow-hidden')}>
            <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
              {children}
            </ThemeProvider>
          </body>
        </html>
      );
    }
