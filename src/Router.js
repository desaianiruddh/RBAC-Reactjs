import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Login from './pages/Login';
import PageNotFound from './pages/PageNotFound';
import { routePaths } from './routePaths';
import Index from './pages/Index';

const Router = () => {
  const { userData } = useSelector((state) => state.user);
  const { username, status } = userData;
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/login" element={<Login />} />
        {username &&
          routePaths(status).map((route, index) => {
            const { path, component: Component, exact } = route;
            return (
              <Route
                key={index}
                exact={exact}
                path={path}
                element={<Component />}
              />
            );
          })}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
