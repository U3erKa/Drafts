import { LANGUAGES } from 'app/constants';
import { UserEntry } from 'types/api/getFromJsonPlaceholder';
import { User } from './api/getFromOwnDB';

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

export type AuthSliceState = {
  user: User;
  isLoading: boolean;
  error: any;
};