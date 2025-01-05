
import { useEffect, useState } from "react"; // Mengimpor hooks useEffect dan useState dari React
import {  Link } from "react-router-dom"; // Mengimpor Link dari react-router-dom
import { useNavigate } from "react-router-dom"; // Mengimpor useNavigate untuk navigasi halaman

export default function Register() {
    const navigate = useNavigate(); // Inisialisasi hook untuk navigasi halaman

    // Inisialisasi state untuk menyimpan data pengguna yang akan didaftarkan
    const [dataUserRegister, setdataUserRegister] = useState({
        name: "",
        email: "",
        password: "",
    });

    useEffect(() => {
        // Mengecek apakah ada data yang disimpan di localStorage saat halaman pertama kali dimuat
        const savedRegister = localStorage.getItem("dataRegisterUsers");
        if (savedRegister) {
            setdataUserRegister(JSON.parse(savedRegister)); // Menyimpan data yang disimpan ke state
        }
    }, []); // Efek dijalankan sekali saat komponen pertama kali dimuat

    const handleRegister = (e) => {
        e.preventDefault(); // Mencegah halaman reload saat form disubmit
        setdataUserRegister({ ...dataUserRegister, [e.target.name]: e.target.value }); // Mengupdate state dengan data dari input
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Mencegah halaman reload saat form disubmit
    
        // Mengecek apakah ada field yang kosong
        if (
            !dataUserRegister.name.trim() || 
            !dataUserRegister.email.trim() || 
            !dataUserRegister.password.trim()
        ) {
            alert("Please fill in all fields"); // Menampilkan pesan peringatan jika ada field yang kosong
            return; // Menghentikan eksekusi jika ada field yang kosong
        }
    
        // Menyimpan data ke localStorage dan melanjutkan ke halaman login
        localStorage.setItem("dataRegisterUsers", JSON.stringify(dataUserRegister));
        alert("Register success"); // Menampilkan pesan sukses
        console.log("Register success", dataUserRegister); // Menampilkan data pendaftaran pada console
        navigate("/login"); // Mengarahkan pengguna ke halaman login
    };

    return (
                <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-cente w-[300px] hidden md:block lg:text-left">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                        <p className="py-6">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo fugiat saepe autem sunt rem laboriosam fugit voluptate quasi amet in.
                        </p>
                    </div>
                    <div className="card  w-full max-w-sm shrink-0 ">
                        <div className="max-w-sm p-6 ">
                                <h2 className="text-2xl font-semibold text-center text-primary mb-6">Register</h2>
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Name"
                                        value={dataUserRegister.name}
                                        onChange={handleRegister}
                                        className="input input-bordered w-full"
                                    />
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email"
                                        value={dataUserRegister.email}
                                        onChange={handleRegister}
                                        className="input input-bordered w-full"
                                    />
                                    <input
                                        type="password"
                                        name="password"
                                        placeholder="Password"
                                        value={dataUserRegister.password}
                                        onChange={handleRegister}
                                        className="input input-bordered w-full"
                                    />
                                    <button type="submit" className="btn btn-primary w-full">Register</button>
                                </form>
                                <Link to="/login" className="text-center block mt-4">Already have an account? Login</Link>
                                {/* Link untuk navigasi ke halaman login */}
                        </div>
                    </div>
                </div>
                </div>
    );
}
