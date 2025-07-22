import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const signup = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/api/v1/users/register",
        {
          name,
          username,
          password,
        }
      );
      console.log(response);
      alert("Registation Successfully");

      navigate("/");

      setName(""), setUsername(""), setPassword("");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <br />
      <div>
        <form onSubmit={signup}>
          <div className="container">
            <div className="row">
              <div className="card col-md-5 offset-md-3">
                <br />
                <h2 className="text-center">Sign Up</h2>
                <div className="card-body content">
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                      className="form-control input-item"
                      autoComplete="usernamme"
                      required
                    />
                  </div>
                  <br />
                  <div className="form-group">
                    <label htmlFor="username" className="form-label">
                      Username
                    </label>
                    <input
                      type="text"
                      id="username"
                      onChange={(e) => {
                        setUsername(e.target.value);
                      }}
                      name="username"
                      className="form-control input-item"
                      autoComplete="given-name"
                      required
                    />
                  </div>
                  <br />

                  <div className="form-group">
                    <label htmlFor="password" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                      className="form-control input-item"
                      autoComplete="current-password"
                      required
                    />
                  </div>
                  <br />
                </div>
                <br />

                <div className="d-grid gap-2 col-8 mx-auto">
                  <button className="btn btn-primary" type="submit">
                    Sign Up
                  </button>
                  <span className="text-center">OR</span>
                  <Link
                    className="btn btn-outline-dark"
                    type="button"
                    to={"/"}
                    style={{ marginBottom: 30 }}
                  >
                    Already have an Account
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Signup;
