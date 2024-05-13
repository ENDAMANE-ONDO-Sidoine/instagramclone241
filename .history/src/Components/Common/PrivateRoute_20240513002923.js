import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext'; // Vérifiez le chemin d'accès

const PrivateRoute = ({ children }) => {
  const { user } = useAuth();  

  return user ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
