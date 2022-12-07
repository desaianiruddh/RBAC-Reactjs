import { useEffect, useState } from 'react';
import './App.css';
import RoutePath from './Router';

function getLocalData() {
  const localStorageData = localStorage.getItem('userRole');
  return localStorageData ? JSON.parse(localStorageData) : '';
}
function App() {
  const [userStatus, setUserStatus] = useState(getLocalData);
  console.log(userStatus);
  // useEffect(() => {
  //   (async () => {
  //     console.log("useEffect");
  //     const status = await JSON.parse(localStorage.getItem('userRole'));
  //     setUserStatus(status);
  //   })();
  // }, []);
  console.log('app', userStatus);
  return <RoutePath userRole={userStatus} />;
}

export default App;
