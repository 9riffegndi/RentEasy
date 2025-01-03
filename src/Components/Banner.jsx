import carsData from "../Data/carsData.json";

export default function Banner() {
    return (        
        <div className="w-full p-2">
        <div style={{backgroundImage: "url('/BannerBg.svg')"}} className="bg-cover shadow rounded-2xl carousel w-full">
            {carsData.slice(0, 10).map((cars, index)  => 
            <div key={index} id={`item${index+1}`} className="carousel-item  flex justify-center w-full"> 
                <div className="items-center flex justify-between w-full relative">
                <div className="flex flex-col p-2 gap-1 w-[50%]">
                    <h1 className="font-bold text-5xl">Mobil Terpopuler</h1>
                    <div className="flex  items-center">
                        <img className="h-[100px] animate-pulse " src={cars.gambarBrand} />
                        <div className="flex gap-2 flex-col">
                            <h1 className=" font-extrabold text-6xl ">{cars.merek}</h1>
                            <p><span>{cars.model}</span> <span className="font-semibold">{cars.tahun}</span></p>
                        </div>
                    </div>
                </div>

                <img src={cars.gambar} className="w-[50%]" alt={cars.merek} /> 
                </div>
            </div>
            )}
        </div>
        </div>

    )
    
}