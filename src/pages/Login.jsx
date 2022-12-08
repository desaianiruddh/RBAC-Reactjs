import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { login } from '../redux/userSlice';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userData } = useSelector((state) => state.user);
  const [userRole, setUserRole] = useState('');
  //if there's user already logged in redirect to home
  useEffect(() => {
    if (userData.username) {
      navigate('/home');
    }
  }, [userData, navigate]);
  //login event
  const userLogin = (e) => {
    e.preventDefault();
    dispatch(login(userRole));
    navigate('/home');
  };
  return (
    <div>
      <input
        type="text"
        name="user"
        value={userRole}
        placeholder="Enter you username"
        onChange={(e) => setUserRole(e.target.value)}
      />
      <button type="button" onClick={userLogin}>
        Login
      </button>
    </div>
  );
};

export default Login;
