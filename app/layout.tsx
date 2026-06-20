import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Premium Australian Restaurant | Handcrafted Grilled Legendary',
  description: 'Experience premium quality meals prepared fresh daily using locally sourced Australian ingredients. Fast delivery, 100% fresh, 4.9★ rating.',
  keywords: 'restaurant, premium food, Australian cuisine, grilled, delivery, kebab, steakhouse',
  openGraph: {
    title: 'Premium Australian Restaurant',
    description: 'Handcrafted. Grilled. Legendary.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0a0a0a" />
      </head>
      <body className="bg-dark-bg text-white">
        {children}
      </body>
    </html>
  );
}
