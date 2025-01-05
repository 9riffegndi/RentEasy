import  carsData  from '../Data/carsData.json';
import {FormatRupiah} from '../Utils/FormatRupiah';
import { useNavigate } from "react-router-dom";
import ButtonPrimary from './ButtonPrimary';
import useAuth from '../Hooks/useAuth';

export default function ListCard({showButton = true}) {
    const navigate = useNavigate(); // Hook untuk navigasi
    const isAuthenticated = useAuth(); // Periksa status login

    // Fungsi untuk mengarahkan ke halaman detail mobil
    const handleRentalClick = (id) => {
        if (!isAuthenticated) {
            navigate("/login"); // Arahkan ke halaman login jika belum login
        } else {
            navigate(`/detailCars/${id}`); // Arahkan ke halaman detailCars jika sudah login
        }
    };

    return (
        <section className='flex shadow border-t-2 p-3 mt-10 rounded-t-xl items-center justify-center w-full flex-col gap-10'>
            <h1 className='w-full text-start font-bold text-3xl'>Find Your Perfect Ride</h1>
        
        <div className="w-full grid grid-cols-12 gap-4 items-start place-content-center ">
            {carsData.map((cars, index)  => 
            <div key={index} className=" min-h-[500px] border justify-between shadow p-2 gap-5 flex flex-col items-center  rounded-xl xs:col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-4 xl:col-span-3 2xl:col-span-3 ">
                <div className="flex w-full justify-between items-center">
                    <div className="flex gap-1 items-center">
                        <img className='h-[20px]' src={cars.gambarBrand} />
                        <p className='font-semibold'>{cars.merek}</p>
                    </div>
                    <p className='text-xs'>{cars.model} <span className='font-semibold'>{cars.tahun}</span></p>
                </div>
                
                <img className='w-full object-cover rounded-sm' src={cars.gambar} alt={cars.merek} />
                
                <div className="w-full justify-between  flex items-start">
                        <div className="flex gap-1 items-center">
                            <img className='h-[20px]' src='https://img.icons8.com/?size=100&id=8712&format=png&color=000000'/>
                            <p className='text-xs'>{cars.bahan_bakar}</p>
                        </div>
                        <div className="flex gap-1 items-center">
                            <img className='h-[20px]' src='https://img.icons8.com/?size=100&id=MAOS9vYtSK7F&format=png&color=000000'/>
                            <p className='text-xs'>{cars.transmisi}</p>
                        </div>
                        <div className="flex gap-1 items-center">
                            <img className='h-[20px]' src='https://img.icons8.com/?size=100&id=PoXXDSy7CGXw&format=png&color=000000'/>
                            <p className='text-xs'>{cars.kapasitas_tempat_duduk} orang</p>
                        </div>
                </div>

                <div className="w-full flex justify-between items-center">
                    <div className="flex gap-1   items-center">
                        <img className='h-[20px]' src="https://img.icons8.com/?size=100&id=8412&format=png&color=000000" />
                        <p className='text-xs'> <span className='font-semibold'>{FormatRupiah(cars.harga_sewa_per_hari)}</span> /hari</p>
                    </div>
                    <p className='text-xs'>Minimal <span className='font-semibold'>{cars.minimalrentalperhari}</span> hari</p>
                </div>

                <div className="flex md:flex-row   flex-col gap-2 items-center w-full justify-between">
                {showButton && (
                            <div className="flex md:flex-row flex-col gap-2 items-center w-full justify-between">                                
                            <ButtonPrimary
                                text="Rental"
                                onClick={handleRentalClick}
                                carId={cars.id} />
                            </div>
                        )}
                </div>
            </div>
            )}
        </div>
        </section>
    );
}
