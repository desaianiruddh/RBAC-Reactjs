import { useSelector } from 'react-redux';

import RoutePath from './Router';

import './App.css';

function App() {
  const { userData } = useSelector((state) => state.user);
  return <RoutePath userRole={userData.status} />;
}

export default App;
