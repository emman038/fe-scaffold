import { ReactElement } from 'react';
import React from 'react';

export const pageType = {
  HOME_PAGE: 'HOME_PAGE',
} as const;

export type PageTypeKeys = keyof typeof pageType;

export type RoutesConfig = AppRouteConfig & {
  path: string;
};

export type AppRouteConfig = {
  render: () => ReactElement;
};

export type ActiveTabConfig = {
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
};
