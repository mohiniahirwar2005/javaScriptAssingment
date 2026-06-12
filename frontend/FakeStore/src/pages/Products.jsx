import React from "react";

const Products = () => {
  return (
    <div className="p-10 space-y-10">
      <div className="w-72 border rounded-2xl p-4 shadow-lg bg-white">
        <div className="h-52 flex justify-center items-center">
          <img
            src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png"
            alt="Bag"
            className="h-full object-contain"
          />
        </div>

        <div className="mt-4">
          <h2 className="text-lg font-semibold">Fjallraven Backpack</h2>

          <p className="text-gray-600 text-sm mt-2">
            Your perfect pack for everyday use and walks in the forest.
          </p>

          <p className="text-3xl font-bold text-green-600 mt-3">$109.95</p>

          <button className="w-full bg-blue-600 text-white py-2 rounded-lg mt-4 hover:bg-blue-700">
            Add to Bag
          </button>
        </div>
      </div>

      <div className="border rounded-2xl p-6 shadow-lg flex gap-6 bg-white">
        <div className="w-56 h-56 flex justify-center items-center">
          <img
            src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png"
            alt="Bag"
            className="h-full object-contain"
          />
        </div>
        <div className="mt-4">
          <h2 className="text-lg font-semibold">Fjallraven Backpack</h2>

          <p className="text-gray-600 text-sm mt-2">
            Your perfect pack for everyday use and walks in the forest.
          </p>

          <p className="text-3xl font-bold text-green-600 mt-3">$109.95</p>

          <button className="w-full bg-blue-600 text-white py-2 rounded-lg mt-4 hover:bg-blue-700">
            Add to Bag
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;
