// Type definitions
export interface Data {
  startYear: number;
  endYear: number;
  title: string;
  periods: Period[];
}

export interface Period {
  year: number;
  content: string;
}
