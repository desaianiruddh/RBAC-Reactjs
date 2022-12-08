import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { login } from '../redux/userSlice';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [userRole, setUserRole] = useState('');

  const userLogin = (e) => {
    e.preventDefault();
    dispatch(login(userRole));
    navigate('/');
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
