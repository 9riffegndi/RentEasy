
// EditModal.jsx
import React, { useState, useEffect } from "react";

const EditModal = ({ order, onSave, onClose }) => {
  const [editedOrder, setEditedOrder] = useState(order || {});

  useEffect(() => {
    if (order) setEditedOrder({ ...order });
  }, [order]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedOrder((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    if (Object.values(editedOrder).some((val) => val === "" || val === null)) {
      alert("Mohon lengkapi semua field sebelum menyimpan!");
      return;
    }
    onSave(editedOrder);
  };

  return (
    <div className="fixed inset-0  bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-primary w-[90%] p-6 shadow-lg ">
        <h2 className="text-xl font-bold mb-4">Edit Pesanan</h2>
        <div className="flex flex-col gap-2">
          <label>
            Nama:
            <input
              type="text"
              name="name"
              value={editedOrder.name || ""}
              className="border p-2 rounded w-full"
              onChange={handleChange}
            />
          </label>
          <label>
            Alamat:
            <input
              type="text"
              name="address"
              value={editedOrder.address || ""}
              onChange={handleChange}
              className="border p-2 rounded w-full"
            />
          </label>
          <label>
            Tanggal Rental:
            <input
              type="date"
              name="rentalDate"
              value={editedOrder.rentalDate || ""}
              onChange={handleChange}
              className="border p-2 rounded w-full"
            />
          </label>
          <label>
            Tenggat Pengembalian:
            <input
              type="date"
              name="returnDate"
              value={editedOrder.returnDate || ""}
              onChange={handleChange}
              className="border p-2 rounded w-full"
            />
          </label>
          <label>
            Hari Sewa:
            <input
              type="number"
              name="rentalDays"
              value={editedOrder.rentalDays || ""}
              onChange={handleChange}
              className="border p-2 rounded w-full"
            />
          </label>
          <label>
            No Telepon:
            <input
              type="text"
              name="phoneNumber"
              value={editedOrder.phoneNumber || ""}
              onChange={handleChange}
              className="border p-2 rounded w-full"
            />
          </label>
        </div>
        <div className="flex justify-end gap-2 mt-4">
          <button className="btn btn-secondary" onClick={onClose}>
            Batal
          </button>
          <button className="btn btn-primary" onClick={handleSave}>
            Simpan
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditModal;