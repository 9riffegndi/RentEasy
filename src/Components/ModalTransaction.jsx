import React, { useState, useEffect } from "react";
import carsData from "../Data/carsData";

export default function ModalTransaction({ className = "", role = "" }) {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [rentalDate, setRentalDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [selectedCar, setSelectedCar] = useState(carsData[0]?.id || "");
  const [rentalDays, setRentalDays] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  useEffect(() => {
    // Get default user name from localStorage
    const userData = JSON.parse(localStorage.getItem("dataRegisterUsers"));
    if (userData && userData.name) {
      setName(userData.name);
    }
  }, []);

  const handleSubmit = () => {
    if (!name || !address || !rentalDate || !returnDate || !selectedCar || !rentalDays || !phoneNumber) {
      alert("Harap lengkapi semua data!");
      return;
    }

    const selectedCarData = carsData.find((car) => car.id === parseInt(selectedCar));
    const orderData = {
      name,
      address,
      rentalDate,
      returnDate,
      rentalDays,
      phoneNumber,
      car: selectedCarData,
    };

    // Save to localStorage
    const existingOrders = JSON.parse(localStorage.getItem("OrderCars")) || [];
    existingOrders.push(orderData);
    localStorage.setItem("OrderCars", JSON.stringify(existingOrders));

    alert("Pesanan berhasil disimpan!");
    window.location.reload();
  };

  return (
    <div className={`modal ${className}`} role={role}>
      <div className="modal-box w-[100%] max-w-7xl mt-24 h-screen">
        <h3 className="text-lg font-bold">Tambah Pesanan Rental Anda</h3>
        <div className="flex flex-col gap-4 w-full">
          <input
            className="w-full input input-bordered"
            type="text"
            placeholder="Nama Pelanggan"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="w-full input input-bordered"
            type="text"
            placeholder="Alamat"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <input
            className="w-full input input-bordered"
            type="date"
            placeholder="Tanggal Rental"
            value={rentalDate}
            onChange={(e) => setRentalDate(e.target.value)}
          />
          <input
            className="w-full input input-bordered"
            type="date"
            placeholder="Tenggat Pengembalian"
            value={returnDate}
            onChange={(e) => setReturnDate(e.target.value)}
          />
          <input
            className="w-full input input-bordered"
            type="number"
            placeholder="Berapa Hari Sewa"
            value={rentalDays}
            onChange={(e) => setRentalDays(e.target.value)}
          />
          <input
            className="w-full input input-bordered"
            type="text"
            placeholder="No Telepon"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <select
            className="w-full select select-bordered"
            value={selectedCar}
            onChange={(e) => setSelectedCar(e.target.value)}
          >
            {carsData.map((car) => (
              <option key={car.id} value={car.id}>
                {car.merek} - {car.model}
              </option>
            ))}
          </select>
          <button className="btn btn-primary mt-4" onClick={handleSubmit}>
            Simpan Pesanan
          </button>
        </div>
      </div>
      <label className="modal-backdrop" htmlFor="my_modal_7"></label>
    </div>
  );
}
