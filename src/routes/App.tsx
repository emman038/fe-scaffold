import './App.css';
import React from 'react';

import { RoutesConfig } from './index.config';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
    <Router>
      <Routes>
        {routesConfig().map(({ path, render }) => (
          <Route key={path} path={path} element={render()} />
        ))}
        <Route path="*" element={<PlaceHolderNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
