import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'; // Import komponen-komponen yang dibutuhkan


import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Cek apakah ada data pengguna yang terdaftar di localStorage (menggunakan dataRegisterUsers)
  useEffect(() => {
    const token = localStorage.getItem('dataRegisterUsers');
    if (token) {
      setIsAuthenticated(true); // Jika ada, set isAuthenticated menjadi true
    }
  }, []);


    const [theme] = useState(localStorage.getItem("theme") || "Business");

    // Menggunakan useEffect untuk mengatur tema berdasarkan yang ada di localStorage
    useEffect(() => {
      // Mengatur tema pada tag <html> setiap kali tema berubah
      document.documentElement.setAttribute("data-theme", theme);
      localStorage.setItem("theme", theme); // Menyimpan tema yang dipilih ke localStorage
    }, [theme]);
  
  

  return (
    <Router>
          
          {/* Routing aplikasi */}
          <Routes>

            {/* Jika sudah terautentikasi, tampilkan halaman-halaman berikut */}
            {isAuthenticated ? (
              <>
              <Route path="/" element={<Home />} />
              </>
            ) : (
              // Jika belum terautentikasi, hanya tampilkan halaman Home
              <>
                <Route path="/" element={<Home />} />
              </>
            )}
            {/* Halaman login dan register tidak boleh diakses jika sudah terautentikasi */}
            <Route path="/login"    element={isAuthenticated ? <Navigate to="/" /> : <Login /> } />
            <Route path="/register" element={isAuthenticated ? <Navigate to="/" /> : <Register /> } />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
    </Router>
  );
}
