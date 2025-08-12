import type { Data } from '@/shared/types';
import { createContext, useCallback, useState } from 'react';
import type { DataContextType, DataProviderProps } from '../types';

export const DataContext = createContext<DataContextType | undefined>(undefined);

export function DataProvider({ children, initialData = [] }: DataProviderProps) {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const nextYears = useCallback(() => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % initialData.length);
  }, [initialData.length]);

  const previousYears = useCallback(() => {
    setActiveIndex((prevIndex) => (prevIndex + initialData.length - 1) % initialData.length);
  }, [initialData.length]);

  const goToYear = useCallback(
    (index: number) => {
      if (index >= 0 && index < initialData.length) {
        setActiveIndex(index);
      }
    },
    [initialData.length],
  );

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
