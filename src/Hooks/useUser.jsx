import { useState, useEffect } from 'react';

const useUser = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Mengambil data pengguna dari localStorage dan mengubahnya menjadi objek
    const storedUser = localStorage.getItem('dataRegisterUsers');
    if (storedUser) {
      setUser(JSON.parse(storedUser)); // Jika ada, set data pengguna ke state
    }
  }, []);

  return user;
};

export default useUser;
