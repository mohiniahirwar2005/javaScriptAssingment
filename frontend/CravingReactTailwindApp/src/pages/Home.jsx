import hero from "../assets/images/hero.png";

function Home() {
  return (
    <>
      <section
        className="min-h-screen bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `url(${hero})`,
        }}
      >
        <div className="bg-black/50 w-full h-full absolute"></div>

        <div className="relative text-center text-white px-4">
          <h1 className="text-5xl font-bold mb-4">
            Your Favorite Food,
            Delivered Fast
          </h1>

          <p className="mb-6 text-lg">
            Order from thousands of restaurants
            and get it delivered to your doorstep
          </p>

          <div className="flex justify-center gap-4">
            <button className="bg-orange-700 px-6 py-3 rounded-lg">
              Sign Up
            </button>

            <button className="bg-white text-black px-6 py-3 rounded-lg">
              Order Now
            </button>
          </div>

          <input
            type="text"
            placeholder="Search restaurants or dishes..."
            className="mt-8 w-full max-w-xl px-4 py-3 rounded-lg text-black"
          />
        </div>
      </section>
    </>
  );
}

export default Home;