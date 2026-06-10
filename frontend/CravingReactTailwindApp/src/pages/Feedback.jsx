function Feedback() {
  return (
    <div className="min-h-screen flex justify-center items-center">

      <form className="bg-white shadow-lg p-8 rounded-xl w[500px]">

        <h2 className="text-3xl font-bold mb-5">
          Share Feedback
        </h2>

        <input
          type="text"
          placeholder="Full Name"
          className="w-full border p-3 rounded mb-3"
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-3 rounded mb-3"
        />

        <select className="w-full border p-3 rounded mb-3">
          <option>Food Quality</option>
          <option>Delivery Experience</option>
          <option>Support</option>
        </select>

        <textarea
          rows="4"
          className="w-full border p-3 rounded mb-3"
          placeholder="Feedback"
        />

        <button className="w-full bg-orange-600 text-white py-3 rounded">
          Submit
        </button>

      </form>

    </div>
  );
}

export default Feedback;