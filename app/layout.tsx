import './globals.css';
import { Inter } from 'next/font/google';
import { Toaster } from 'react-hot-toast';

import Header from '@/components/header';
import Footer from '@/components/footer';
import SelectedContextProvider from '@/context/selected-context';
import ThemeSwitch from '@/components/theme-switch';
import ThemeContextProvider from '@/context/theme-context';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Tia',
  description: 'Portfolio',
  icons: {
    icon: '/icon.ico',
  },
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
        className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36
                  dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-80`}
      >
        <div
          className='bg-[#fbe2e3] absolute -z-10 top-[-6rem] right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]
                    dark:bg-[#946263]'
        />
        <div
          className='bg-[#dbd7fb] absolute -z-10 top-[-1rem] left-[-35rem] h-[31.25rem] w-[50em] rounded-full blur-[10rem] 
                    sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]
                   dark:bg-[#676394]'
        />
        <ThemeContextProvider>
          <SelectedContextProvider>
            <Header />
            {children}
            <Footer />
            <Toaster position='top-right' />
            <ThemeSwitch />
          </SelectedContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
