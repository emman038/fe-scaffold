import { AppRouteConfig } from '@AppTypes';

const AppRoute = ({ render }: AppRouteConfig) => {
  return <>{render()}</>;
};

export default AppRoute;
