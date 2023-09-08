import './globals.css';
import { Inter } from 'next/font/google';

import Header from '@/components/header';
import SelectedContextProvider from '@/context/selected-context';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Tia',
  description: 'Portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang='en'
      className='!scroll-smooth'
      suppressHydrationWarning={true}
    >
      <body
        suppressHydrationWarning={true}
        className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36`}
      >
        <div className='bg-[#fbe2e3] absolute -z-10 top-[-6rem] right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]'></div>
        <div className='bg-[#dbd7fb] absolute -z-10 top-[-1rem] left-[-35rem] h-[31.25rem] w-[50em] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]'></div>
        <SelectedContextProvider>
          <Header />
          {children}
        </SelectedContextProvider>
      </body>
    </html>
  );
}
