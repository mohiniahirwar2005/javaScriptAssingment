function Contact() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <form className="bg-white p-8 rounded-xl shadow-lg w[450px]">

        <h2 className="text-3xl font-bold text-orange-600 mb-5">
          Contact Us
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

        <input
          type="text"
          placeholder="Subject"
          className="w-full border p-3 rounded mb-3"
        />

        <textarea
          rows="4"
          placeholder="Message"
          className="w-full border p-3 rounded mb-3"
        />

        <button className="bg-orange-600 text-white w-full py-3 rounded">
          Send Message
        </button>

      </form>

    </div>
  );
}

export default Contact;