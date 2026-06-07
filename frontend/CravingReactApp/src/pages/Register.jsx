import { useState } from "react";

function Register() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("fullName:", Fullname);
    console.log("email:", email);
    console.log("password:", password);
    setUserName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="d-flex justify-content-center" style={{paddingTop: '80px'}}>
      <div className="border p-3 w-50 mt-5 bg-light shadow rounded">
        <h1 className="text-center">Welcome!!!</h1>
        <br />
        <form onSubmit={handleSubmit}>
          <label htmlFor="fullName">Fullname</label>
          <input
            id="fullName"
            type="text"
            className="form-control"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            required
          />
          <br />
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <br />
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <br />
          <div className="d-flex justify-content-end">
            <button type="submit" className="btn btn-primary">
              Register
            </button>
          </div>
        </form>
        <hr />
        <p>Don't have an account?</p>
      </div>
    </div>
  );
}

export default Register;