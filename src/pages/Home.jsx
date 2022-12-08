import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { logout } from '../redux/userSlice';

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userLogout = () => {
    dispatch(logout());
    navigate('/login');
  };
  return (
    <>
      Home
      <button type="button" onClick={userLogout}>
        Logout
      </button>
    </>
  );
};

export default Home;
