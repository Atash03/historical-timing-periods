// Type definitions
export interface Data {
  startYear: number;
  endYear: number;
  periods: Period[];
}

export interface Period {
  year: number;
  content: string;
}
