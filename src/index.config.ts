import { ReactElement } from 'react';

export type RoutesConfig = {
  path: string;
  render: () => ReactElement;
};

export type AppRouteConfig = {
  render: () => ReactElement;
};
