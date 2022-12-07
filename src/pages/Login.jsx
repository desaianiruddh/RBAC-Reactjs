import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [userRole, setUserRole] = useState('');

  const userLogin = (e) => {
    e.preventDefault();
    localStorage.setItem('userRole', JSON.stringify(userRole));
    navigate('/');
  };
  return (
    <div>
      <input
        type="text"
        name="user"
        value={userRole}
        onChange={(e) => setUserRole(e.target.value)}
      />
      <button type="button" onClick={userLogin}>
        Login
      </button>
    </div>
  );
};

export default Login;
