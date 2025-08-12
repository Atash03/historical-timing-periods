import { useContext } from 'react';
import type { DataContextType } from '../types';
import { DataContext } from '../ui/data-provider';

export function useData() {
  const context = useContext(DataContext);
  if (context === undefined) {
    console.error('useData must be used within a DataProvider');
  }
  return context as DataContextType;
}
