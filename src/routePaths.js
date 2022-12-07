import AddFunctionality from './pages/AddFunctionality';
import AdminPanel from './pages/AdminPanel';
import Home from './pages/Home';
import ManagerPanel from './pages/ManagerPanel';
import RemoveUser from './pages/RemoveUser';
import SuperAdminPanel from './pages/SuperAdminPanel';

export const routePaths = (status) => {
  console.log('status', status);

  switch (status) {
    case 'user':
      console.log('user');
      return [{ path: '/', component: Home, exact: true }];
    case 'admin':
      return [
        { path: '/', component: Home, exact: true },
        { path: '/admin-panel', component: AdminPanel, exact: true },
        {
          path: '/add-functionality',
          component: AddFunctionality,
          exact: true,
        },
      ];
    case 'manager':
      return [
        { path: '/', component: Home, exact: true },
        {
          path: '/add-functionality',
          component: AddFunctionality,
          exact: true,
        },
        { path: '/manager-panel', component: ManagerPanel, exact: true },
        { path: '/remove-user', component: RemoveUser, exact: true },
      ];
    case 'super':
      return [
        { path: '/', component: Home, exact: true },
        { path: '/admin-panel', component: AdminPanel, exact: true },
        {
          path: '/add-functionality',
          component: AddFunctionality,
          exact: true,
        },
        { path: '/super-admin-panel', component: SuperAdminPanel, exact: true },
        { path: '/manager-panel', component: ManagerPanel, exact: true },
        { path: '/remove-user', component: RemoveUser, exact: true },
      ];
    default:
      return [];
  }
};
