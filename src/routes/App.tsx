import './App.css';

import { Routes, Route } from 'react-router-dom';

import { RoutesConfig } from './index.config';
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
        <Route key={path} path={path} element={render()} />
      ))}
      <Route path="*" element={<PlaceHolderNotFound />} />
    </Routes>
  );
}

export default App;
