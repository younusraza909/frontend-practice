import './globals.css';
import { Ubuntu } from 'next/font/google';

const ubuntu = Ubuntu({ subsets: ['latin'], weight: ['400', '500', '700'] });

export const metadata = {
  title: 'Multi Step Form App',
  description: 'Frontend Mentor Practice Project',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`${ubuntu.className} bg-[color:var(--light-gray)]`}>
        {children}
      </body>
    </html>
  );
}
