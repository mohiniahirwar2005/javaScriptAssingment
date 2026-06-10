function RestaurantCard() {
  return (
    <div className="shadow-lg rounded-xl overflow-hidden hover:scale-105 transition">

      <img
        src="https://images.unsplash.com/photo-1513104890138-7c749659a591"
        alt=""
        className="h-52 w-full object-cover"
      />

      <div className="p-4">
        <h3 className="font-bold text-xl">
          Pizza Palace
        </h3>

        <p className="text-gray-500">
          Best Italian Pizza
        </p>

        <p className="mt-2">
          ⭐ 4.5 • 120 Reviews
        </p>
      </div>

    </div>
  );
}

export default RestaurantCard;