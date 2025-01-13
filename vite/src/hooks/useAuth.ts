import { useState } from 'react';
import { login } from '../utils/api';

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = async (username: string, password: string) => {
    const response = await login(username, password);
    if (response.success) {
      setIsAuthenticated(true);
    }
  };

  return { isAuthenticated, handleLogin };
};

export default useAuth;