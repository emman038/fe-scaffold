import { ReactElement } from 'react';
import React from 'react';

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
