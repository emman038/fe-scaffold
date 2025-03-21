import { RoutesConfig } from '@AppTypes';
import { Routes, Route } from 'react-router-dom';
import AppRoute from 'src/components/appRoute';

import PlaceHolderHomePage from './placeHolderHomePage';
import PlaceHolderNotFound from './placeHolderNotFound';

const routesConfig = (): RoutesConfig[] => [
  {
    path: '/',
    render: () => <PlaceHolderHomePage />,
  },
];

function App() {
  return (
    <Routes>
      {routesConfig().map(({ path, render }) => (
        <Route key={path} path={path} element={<AppRoute render={render} />} />
      ))}
      <Route path="*" element={<PlaceHolderNotFound />} />
    </Routes>
  );
}

export default App;
