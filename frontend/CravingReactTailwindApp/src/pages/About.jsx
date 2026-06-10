function About() {
  const stats = [
    "50K+ Happy Customers",
    "1200+ Restaurants",
    "3500+ Riders",
    "4.8⭐ Rating",
  ];

  return (
    <>
      <section className="bg-black text-white py-24 text-center">
        <h1 className="text-5xl font-bold">
          About <span className="text-orange-600">Cravings</span>
        </h1>

        <p className="mt-4 max-w-2xl mx-auto">
          Connecting hungry hearts with amazing food.
        </p>
      </section>

      <section className="grid md:grid-cols-4 gap-6 p-10 bg-zinc-900 text-white">
        {stats.map((item) => (
          <div key={item} className="text-center">
            <h3 className="text-orange-600 text-3xl font-bold">
              {item.split(" ")[0]}
            </h3>
            <p>{item.replace(item.split(" ")[0], "")}</p>
          </div>
        ))}
      </section>
    </>
  );
}

export default About;