import type { Data } from '@/shared/types';
import { type ReactNode, createContext, useContext, useState } from 'react';
import type { DataContextType, DataProviderProps } from '../types';

export const DataContext = createContext<DataContextType | undefined>(undefined);

export function DataProvider({ children, initialData = [] }: DataProviderProps) {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const nextYears = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % initialData.length);
  };

  const previousYears = () => {
    setActiveIndex((prevIndex) => (prevIndex + initialData.length - 1) % initialData.length);
  };

  const goToYear = (index: number) => {
    if (index >= 0 && index < initialData.length) {
      setActiveIndex(index);
    }
  };

  const activeValue: Data = initialData[activeIndex];

  return (
    <DataContext.Provider
      value={{
        activeValue,
        activeIndex,
        length: initialData.length,
        nextYears,
        previousYears,
        goToYear,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
