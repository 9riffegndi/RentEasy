// utils/useAuth.js
import { useState, useEffect } from 'react';

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Cek apakah ada data pengguna yang terdaftar di localStorage (menggunakan dataRegisterUsers)
  useEffect(() => {
    const token = localStorage.getItem('dataRegisterUsers');
    if (token) {
      setIsAuthenticated(true); // Jika ada, set isAuthenticated menjadi true
    }
  }, []);

  return isAuthenticated;
};

export default useAuth;
