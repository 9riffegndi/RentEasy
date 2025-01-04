import { useParams } from "react-router-dom";
import carsData from '../Data/carsData.json';

import LayoutMain from "../Layouts/LayoutMain";
import ListCard from "../Components/ListCard";
import ModalTransaction from "../Components/ModalTransaction";

import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";


export default function DetailCars() {
    const { id } = useParams();
    const carDetail = carsData.find((car) => car.id === parseInt(id));

    if (!id || isNaN(id)) {
        return <p>Invalid car ID</p>;
    }

    return (
        <LayoutMain>
        <Navbar />
        <section className="w-full mt-2 flex flex-col min-h-screen gap-10 ">
                <div className="w-full grid grid-cols-12 gap-1 min-h-screen">
                <div className="border-2 w-full col-span-12 md:col-span-6">
                {carDetail ? (
                <>
                    <div className="w-full carousel">
                        {carDetail.gambarDetail?.length > 0 ? (
                            carDetail.gambarDetail.map((gambar, index) => (
                                <div
                                    key={index}
                                    id={`item-${index}`}
                                    className={`carousel-item w-full ${index === 0 ? 'active' : ''}`}
                                >
                                    <img className="w-full h-[400px]" src={gambar} alt={`Gambar ${index + 1}`} />
                                </div>
                            ))
                        ) : (
                            <p>Gambar detail belum tersedia untuk mobil ini.</p>
                        )}
                    </div>
                    <div className="carousel  p-2 w-full ">
                        {carDetail.gambarDetail?.map((_, index) => (
                            <a
                                key={index}
                                href={`#item-${index}`}
                                className="carousel-item w-[26%]  cursor-pointer">
                                <img
                                    className="h-[100px] "
                                    src={carDetail.gambarDetail[index]}
                                    alt={`Thumbnail ${index + 1}`}
                                />
                            </a>
                        ))}
                    </div>
                </>
                ) : (
                    <p>Mobil tidak ditemukan</p>
                )}
                </div>
                    <div className=" p-2 items-center w-full col-span-12 md:col-span-6">
                        <div className="flex gap-1 text-2xl font-bold justify-start items-center">
                            <img className="h-[40px]" src={carDetail.gambarBrand}/>
                            <h1>{carDetail.merek}</h1> 
                            <p>- {carDetail.model}</p>
                        </div>

                        <div className="font-semibold flex flex-col gap-1 w-full">
                            <p>Tahun {carDetail.tahun}</p>
                            <div className="flex items-center">
                                <img className="h-[20px]" src="https://img.icons8.com/?size=100&id=22991&format=png&color=000000" />
                                <p className="font-semibold">Mesin {carDetail.mesin}</p>
                            </div>
                            <div className="flex items-center">
                                <img className="h-[20px]" src="https://img.icons8.com/?size=100&id=10024&format=png&color=000000" />
                                <p className="font-semibold">Tenaga Kuda {carDetail.tenaga_kuda} HP</p>
                            </div>
                            <div className="flex items-center">
                                <img className="h-[20px]" src="https://img.icons8.com/?size=100&id=0F6vfWaX5rTm&format=png&color=000000" />
                                <p>Transmisi {carDetail.transmisi}</p>
                            </div>

                            <div className="flex items-center">
                                <img className="h-[20px]" src="https://img.icons8.com/?size=100&id=PoXXDSy7CGXw&format=png&color=000000" />
                                <p>Kapasitas Tempat Duduk {carDetail.kapasitas_tempat_duduk} orang</p>
                            </div>

                            <div className="flex items-center">
                                <img className="h-[20px]" src="https://img.icons8.com/?size=100&id=9EzcdhKjX0E7&format=png&color=000000"  />
                                <p>Bahan Bakar {carDetail.asuransi}</p>
                            </div>

                            <div className="flex items-center">
                                <img className="h-[20px]" src="https://img.icons8.com/?size=100&id=4KE99cmdF0M3&format=png&color=000000"  />
                                <p>Kapasitas Bagasi {carDetail.kapasitas_bagasi}</p>
                            </div>


                            <div className="flex items-center">
                                <img className="h-[20px]" src="https://img.icons8.com/?size=100&id=8412&format=png&color=000000 "  />
                                <p>Harga {carDetail.harga_sewa_per_hari} / hari </p>
                            </div>


                            {/* modal transction */}
                            <label htmlFor="my_modal_7" className="btn">Hubungi</label>
                            <input type="checkbox" id="my_modal_7" className="modal-toggle" />
                            <ModalTransaction className="modal" role="dialog" />
                        </div>
                    </div>
            </div>



            {/* List Card */}
            <ListCard showButton={false} />
            </section>
            <Footer />
        </LayoutMain>
    );
}
