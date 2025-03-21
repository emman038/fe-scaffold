import { ReactElement } from 'react';

export type RoutesConfig = {
  path: string;
  render: () => ReactElement;
};
