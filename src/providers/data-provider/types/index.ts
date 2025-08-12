import type { Data } from '@/shared/types';
import type { ReactNode } from 'react';

export type DataContextType = {
  activeValue: Data;
  activeIndex: number;
  length: number;
  nextYears: () => void;
  previousYears: () => void;
  goToYear: (index: number) => void;
};

export interface DataProviderProps {
  children: ReactNode;
  initialData: Data[];
}
