// HistoryOrder.jsx
import React, { useState, useEffect } from "react";
import EditModal from "../Components/EditModal";

export default function HistoryOrder() {
  const [orders, setOrders] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedOrderIndex, setSelectedOrderIndex] = useState(null);

  useEffect(() => {
    const savedOrders = JSON.parse(localStorage.getItem("OrderCars")) || [];
    setOrders(savedOrders);
  }, []);

  const handleDelete = (index) => {
    const updatedOrders = orders.filter((_, i) => i !== index);
    localStorage.setItem("OrderCars", JSON.stringify(updatedOrders));
    setOrders(updatedOrders);
    alert("Pesanan berhasil dihapus!");
  };

  const handleEdit = (index) => {
    setSelectedOrderIndex(index);
    setIsModalOpen(true);
  };

  const handleSaveEdit = (editedOrder) => {
    const updatedOrders = orders.map((order, index) =>
      index === selectedOrderIndex ? editedOrder : order
    );
    setOrders(updatedOrders);
    localStorage.setItem("OrderCars", JSON.stringify(updatedOrders));
    setIsModalOpen(false);
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">History Pesanan</h2>
      <div className="flex flex-col gap-4">
        {orders.length > 0 ? (
          orders.map((order, index) => (
            <div key={index} className="border p-4 rounded-lg shadow-sm">
              <h3 className="font-bold">{order.name}</h3>
              <p>Alamat: {order.address}</p>
              <p>Tanggal Rental: {order.rentalDate}</p>
              <p>Tenggat Pengembalian: {order.returnDate}</p>
              <p>Hari Sewa: {order.rentalDays}</p>
              <p>No Telepon: {order.phoneNumber}</p>
              <p>Mobil: {order.car.merek} - {order.car.model}</p>
              <div className="flex gap-2 mt-2">
                <button
                  className="btn btn-warning"
                  onClick={() => handleEdit(index)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-error"
                  onClick={() => handleDelete(index)}
                >
                  Hapus
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>Tidak ada pesanan.</p>
        )}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <EditModal
          order={orders[selectedOrderIndex]}
          onSave={handleSaveEdit}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
}
