export enum ExhibitionType {
  'Permanent exhibition' = 'Permanent exhibition',
  'Temporary exhibition' = 'Temporary exhibition',
  'Combined Admission' = 'Combined Admission',
}

export type Inputs = {
  date: string;
  time: string;
  name: string;
  email: string;
  phone: string;
  exhibition: ExhibitionType;
  basic: number;
  senior: number;
  card__number: string;
  card__exp_month: string;
  card__exp_year: string;
  card__name: string;
  cvv: string;
};

export type InputsShort = {
  exhibition: ExhibitionType;
  basic: number;
  senior: number;
};
