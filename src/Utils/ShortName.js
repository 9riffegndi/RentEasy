// utils/shortenName.js

 const ShortenName = (fullName) => {
    // Memisahkan nama berdasarkan spasi
    const nameParts = fullName.split(' ');
  
    // Mengambil inisial dari setiap bagian nama (maksimal 3 bagian)
    const initials = nameParts.slice(0, 3).map(part => part.charAt(0).toUpperCase()).join('');
  
    return initials;
  };
  
  export default ShortenName;