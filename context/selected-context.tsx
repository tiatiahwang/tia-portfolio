'use client';

import React, {
  createContext,
  useContext,
  useState,
} from 'react';
import type { SectionName } from '@/lib/types';

type SelectedContextProviderProps = {
  children: React.ReactNode;
};

type SelectedContextType = {
  selected: SectionName;
  setSelected: React.Dispatch<
    React.SetStateAction<SectionName>
  >;
  timeOfLastClick: number;
  setTimeOfLastClick: React.Dispatch<
    React.SetStateAction<number>
  >;
};

export const SelectedContext =
  createContext<SelectedContextType | null>(null);

export default function SelectedContextProvider({
  children,
}: SelectedContextProviderProps) {
  const [selected, setSelected] =
    useState<SectionName>('Home');
  const [timeOfLastClick, setTimeOfLastClick] = useState(0);

  return (
    <SelectedContext.Provider
      value={{
        selected,
        setSelected,
        timeOfLastClick,
        setTimeOfLastClick,
      }}
    >
      {children}
    </SelectedContext.Provider>
  );
}

export function useSelectedContext() {
  const context = useContext(SelectedContext);

  if (context === null) {
    throw Error(
      'useSelectedContext must be used within a SelectedContextProvider',
    );
  }

  return context;
}
