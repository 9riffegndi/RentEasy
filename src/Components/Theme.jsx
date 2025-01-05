import React from "react";
import { useEffect, useState } from "react";



export default function Theme({className=""}) {

    const [theme, setTheme] = useState(localStorage.getItem("theme") || "business");

    useEffect(() => {
        // Menetapkan tema pada elemen <html> setiap kali tema berubah
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme); // Menyimpan tema yang dipilih ke localStorage
    }, [theme]);

    const handleThemeChange = (event) => {
        // Memperbarui tema ketika pilihan baru dipilih
        setTheme(event.target.value); 
    };

    return (
        <>
        <label htmlFor="theme-selector" className="sr-only">Select Theme</label>
                <select
                    id="theme-selector"
                    className={`select select-primary rounded-full select-sm ${className} `}
                    value={theme} // Ini memastikan tema yang dipilih dikendalikan oleh React
                    onChange={handleThemeChange}
                >
                    <option value="" disabled>Themes</option>
                    <option value="light">Light</option>
                    <option value="black">Black</option>
                    <option value="black">Lofi</option>
                    <option value="business">Business</option>
                    <option value="dark">Dark</option>
                    <option value="cupcake">Cupcake</option>
                    <option value="bumblebee">Bumblebee</option>
                    <option value="emerald">Emerald</option>
                    <option value="corporate">Corporate</option>
                    <option value="synthwave">Synthwave</option>
                    <option value="retro">Retro</option>
                    <option value="cyberpunk">Cyberpunk</option>
                    <option value="valentine">Valentine</option>
                    <option value="halloween">Halloween</option>
                    <option value="garden">Garden</option>
                    <option value="forest">Forest</option>
                    <option value="pastel">Pastel</option>
                    <option value="fantasy">Fantasy</option>
                    <option value="wireframe">Wireframe</option>
                    <option value="luxury">Luxury</option>
                    <option value="dracula">Dracula</option>
                    <option value="cmyk">CMYK</option>
                    <option value="autumn">Autumn</option>
                    <option value="acid">Acid</option>
                    <option value="lemonade">Lemonade</option>
                    <option value="night">Night</option>
                    <option value="winter">Winter</option>
                    <option value="nord">Nord</option>
                    <option value="sunset">Sunset</option>
                </select>
        </>
    )
    
}