export const DEFAULT_FILTER = 'All Genres';

export const StoreName = {
  Films: 'FILMS',
  Filters: 'FILTERS',
  User: 'USER',
  AppError: 'APP_ERROR',
} as const;

export type StoreNameKey = keyof typeof StoreName;
export type StoreNameValue = (typeof StoreName)[StoreNameKey];
