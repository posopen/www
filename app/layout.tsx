import './globals.css';

export const metadata = {
  title: 'posOpen',
  description: 'Open, modular, offline-capable Point-of-Sale platform',
  manifest: '/manifest.json',
  themeColor: '#2563eb'
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
