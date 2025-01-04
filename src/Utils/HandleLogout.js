// utils/logout.js

const HandleLogout = () => {
  localStorage.removeItem('dataRegisterUsers'); // Menghapus data pengguna
  window.location.reload(); // Memuat ulang halaman setelah logout
};
export default HandleLogout;
