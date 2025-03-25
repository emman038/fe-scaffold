import { AppRouteConfig } from '@AppTypes';

import ActiveTabProvider from '../activeTabProvider';
import NavBar from '../navBar';

const AppRoute = ({ render }: AppRouteConfig) => {
  return (
    <ActiveTabProvider>
      <NavBar />
      {render()}
    </ActiveTabProvider>
  );
};

export default AppRoute;
