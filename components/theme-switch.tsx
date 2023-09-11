'use client';

import { BsMoon, BsSun } from 'react-icons/bs';
import { useTheme } from '@/context/theme-context';

const ThemeSwitch = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className='fixed bottom-5 right-5 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] 
                border border-white border-opacity-40 rounded-full shadow-2xl flex items-center justify-center
                hover:scale-[1.15] active:scale-105 transition-all
                dark:bg-gray-950'
    >
      {theme === 'light' ? <BsSun /> : <BsMoon />}
    </button>
  );
};

export default ThemeSwitch;
