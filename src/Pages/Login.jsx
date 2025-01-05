import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";



export default function Login() {
    // Menggunakan hook useNavigate untuk navigasi setelah login
    const navigate = useNavigate();


    // State untuk menyimpan data login (email dan password)
    const [login, setLogin] = useState({
        email: "",
        password: "",
    });

    // State untuk menyimpan pesan error jika login gagal
    const [error, setError] = useState("");

    // Fungsi untuk menangani login
    const handleLogin = (e) => {
        e.preventDefault(); // Mencegah form dari pengiriman default
        const savedData = localStorage.getItem("dataRegisterUsers"); // Mengambil data pengguna terdaftar dari localStorage
        
        if (savedData) {
            const savedRegister = JSON.parse(savedData); // Mengurai data pengguna terdaftar
            
            // Memeriksa apakah email dan password cocok dengan yang ada di localStorage
            if (
                savedRegister.email === login.email &&
                savedRegister.password === login.password
            ) {
                console.log("Login successful!");
                setError(""); // Reset pesan error
                // Navigasi ke halaman home setelah login berhasil
                navigate("/");  // Pastikan navigasi berjalan dengan benar
                window.location.reload(); // Memuat ulang halaman setelah login
            } else {
                setError("Invalid email or password"); // Menampilkan error jika email atau password salah
            }
        } else {
            setError("No registered user found"); // Menampilkan error jika tidak ada pengguna terdaftar
        }
    };

    // Fungsi untuk menangani perubahan input form
    const handleChange = (e) => {
        setLogin({ ...login, [e.target.name]: e.target.value });
    };

    return (
        <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-cente w-[300px] hidden md:block lg:text-left">
                <h1 className="text-5xl font-bold">Login now!</h1>
                <p className="py-6">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo fugiat saepe autem sunt rem laboriosam fugit voluptate quasi amet in.
                </p>
            </div>
            <div className="card  w-full max-w-sm shrink-0 ">
                <div className="max-w-sm p-6 ">
                        <h2 className="text-2xl font-semibold text-center text-primary mb-6">Login</h2>
                        <form onSubmit={handleLogin} className="space-y-4">
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={login.email}
                                onChange={handleChange}
                                className="input input-bordered w-full"
                            />
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                value={login.password}
                                onChange={handleChange}
                                className="input input-bordered w-full"
                            />
                            <button type="submit" className="btn btn-primary w-full">Login</button>
                            {error && <p className="text-red-500 text-center">{error}</p>} {/* Menampilkan pesan error jika ada */}
                        </form>
                        {/* Tautan untuk menuju halaman registrasi jika pengguna belum memiliki akun */}
                        <Link to="/register" className="text-center block mt-4">Don't have an account? Register</Link>
                </div>
            </div>
        </div>
        </div>
    );
}
