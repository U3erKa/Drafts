import { LANGUAGES } from 'app/constants';
import { UserEntry } from 'types/api/getFromJsonPlaceholder';

export type CounterSliceState = {
  count: number;
  step: number;
};

export type LangSliceState = LANGUAGES;

export type UserSliceState = {
  users: UserEntry[];
  isLoading: boolean;
  error: any;
};
