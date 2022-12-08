import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const { userData } = useSelector((state) => state.user);
  const navigate = useNavigate();
  //If there's no user exist then redirect to login page
  useEffect(() => {
    if (!userData.username) {
      navigate('/login');
    }
  }, [userData, navigate]);

  return <div>Index</div>;
};

export default Index;
