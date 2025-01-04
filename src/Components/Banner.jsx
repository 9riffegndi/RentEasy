import carsData from "../Data/carsData.json";

export default function Banner() {
    return (        
        <div className="w-full p-2">
        <div style={{backgroundImage: "url('/BannerBg.svg')"}} className="bg-cover shadow rounded-2xl carousel w-full">
            {carsData.slice(0, 10).map((cars, index)  => 
            <div key={index} id={`item${index+1}`} className="carousel-item  flex-col flex  justify-between w-full"> 
                <div className="items-center flex md:flex-row flex-col justify-between w-full relative">
                    <div className="flex flex-col p-2 gap-1 w-full md:w-[50%]">
                        <h1 className="font-bold text-4xl md:text-6xl">Mobil Terpopuler</h1>
                        <div className="flex  items-center">
                            <img className="h-[50px] md:h-[100px]  animate-pulse " src={cars.gambarBrand} />
                            <div className="flex gap-2 flex-col">
                                <h1 className=" font-extrabold text-xl md:text-6xl ">{cars.merek}</h1>
                                <p><span>{cars.model}</span> <span className="font-semibold">{cars.tahun}</span></p>
                            </div>
                        </div>
                    </div>
                    <img src={cars.gambar} className="w-full md:w-[50%]" alt={cars.merek} /> 
                </div>


                <div className="grid  grid-cols-12 place-content-center w-full">
                    <div className="border p-2 col-span-4 gap-2 items-center flex justify-center">
                        <img className="h-[45px]" src="https://img.icons8.com/?size=100&id=22991&format=png&color=000000"  />
                        <p className="font-semibold md:text-xl text-xs whitespace-normal">{cars.mesin}</p>
                        </div>
                    <div className="border p-2 col-span-4 gap-2 items-start flex justify-center">
                        <img className="h-[45px]" src="https://img.icons8.com/?size=100&id=10024&format=png&color=000000"  />
                        <div className="flex flex-col ">
                            <p className="md:text-xl text-xs">Tenaga Kuda</p>
                            <p className="font-semibold md:text-xl text-xs text-success">{cars.tenaga_kuda} HP</p>
                        </div>
                    </div>
                    <div className="border p-2  col-span-4 items-start gap-1 flex justify-center">
                        <img className="h-[45px]" src="https://img.icons8.com/?size=100&id=4KE99cmdF0M3&format=png&color=000000"  />
                        <div className="flex flex-col">
                            <p className="md:text-xl text-xs">Bagasi</p>
                            <p className="font-semibold md:text-xl text-xs">{cars.kapasitas_bagasi}</p>
                        </div>
                    </div>
                </div>
            </div>
            )}
        </div>
        </div>

    )
    
}