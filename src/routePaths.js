import AddFunctionality from './pages/AddFunctionality';
import AdminPanel from './pages/AdminPanel';
import Home from './pages/Home';
import ManagerPanel from './pages/ManagerPanel';
import RemoveUser from './pages/RemoveUser';
import SuperAdminPanel from './pages/SuperAdminPanel';

//all paths with respective components
const pathAndComponent = [
  { path: '/home', component: Home, exact: true },
  {
    path: '/add-functionality',
    component: AddFunctionality,
    exact: true,
  },
  { path: '/admin-panel', component: AdminPanel, exact: true },
  { path: '/manager-panel', component: ManagerPanel, exact: true },
  { path: '/super-admin-panel', component: SuperAdminPanel, exact: true },
  { path: '/remove-user', component: RemoveUser, exact: true },
];

//assign route or page name to path
const [
  home,
  addFunctionality,
  adminPanel,
  managerPanel,
  superAdminPanel,
  removeUser,
] = pathAndComponent;
export const routePaths = (status) => {
  switch (status) {
    case 'user':
      return [home];
    case 'admin':
      return [home, adminPanel, addFunctionality];
    case 'manager':
      return [home, addFunctionality, managerPanel, removeUser];
    case 'super':
      return [
        home,
        adminPanel,
        addFunctionality,
        superAdminPanel,
        managerPanel,
        removeUser,
      ];
    default:
      return [];
  }
};
