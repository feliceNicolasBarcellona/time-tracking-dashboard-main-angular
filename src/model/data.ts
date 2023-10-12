export interface Data {
  title: string;
  timeframes: Timeframes;
}

export interface Timeframes {
  daily: Daily;
  weekly: Weekly;
  monthly: Monthly;
  [selectedPeriod: string]: Daily | Weekly | Monthly;
}

export interface Daily {
  current: number;
  previous: number;
}

export interface Weekly {
  current: number;
  previous: number;
}

export interface Monthly {
  current: number;
  previous: number;
}

export interface Item {
  title: string;
  timeframes: Timeframes;
}
