import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import PageNotFound from './pages/PageNotFound';
import { routePaths } from './routePaths';

const Router = ({ userRole }) => {
  // const [routePath, setRoutePath] = useState([])
  console.log(userRole);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        {userRole &&
          routePaths(userRole).map((route, index) => {
            console.log('route', route);
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
