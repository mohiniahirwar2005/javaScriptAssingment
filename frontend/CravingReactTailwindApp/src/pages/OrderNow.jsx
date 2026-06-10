import RestaurantCard from "../components/RestaurantCard";

function OrderNow() {
  return (
    <div className="max-w-7xl mx-auto py-10 px-5">

      <h1 className="text-4xl font-bold text-center mb-6">
        Order Now
      </h1>

      <input
        type="text"
        placeholder="Search Restaurant..."
        className="w-full border p-3 rounded-lg mb-8"
      />

      <div className="flex flex-wrap gap-3 justify-center mb-10">
        <button className="bg-orange-600 text-white px-5 py-2 rounded-full">
          All
        </button>

        <button className="border px-5 py-2 rounded-full">
          Vegetarian
        </button>

        <button className="border px-5 py-2 rounded-full">
          Non-Veg
        </button>

        <button className="border px-5 py-2 rounded-full">
          Desserts
        </button>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
      </div>

    </div>
  );
}

export default OrderNow;