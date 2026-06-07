import { useState } from "react";

function Login() {
  const [userName, setUserName] = useState("");
  const [passward, setPassward] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("userName :", userName);
    console.log("passward :", passward);

    
  };
  return (
    <>
      <div className="d-flex justify-content-center">
        <div className="border p-3 w-50 mt-5 bg-light shadow rounded">
          <h1 className="text-center">Welcome Back!!!</h1>
          <br />
          <form onSubmit={handleSubmit}>
            <label htmlFor="userName">Username</label>
            <input
              type="text"
              name="userName"
              className="form-control"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <br />
            <label htmlFor="passward">Passward</label>
            <input
              type="passward"
              name="passward"
              className="form-control"
              value={passward}
              onChange={(e) => setPassward(e.target.value)}
            />
            <br />
            <div className="float-end">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login