import localFont from 'next/font/local';
import SidebarLayout from 'components/SidebarLayout';
import './globals.css';

export const metadata = {
  title: 'Onus',
  description: 'AI powered music creation',
};

const satoshi = localFont({
  src: './Satoshi-Variable.woff2',
  display: 'swap',
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${satoshi.className} h-full`}>
      <body className="h-full">
        <SidebarLayout>{children}</SidebarLayout>
      </body>
    </html>
  );
}
