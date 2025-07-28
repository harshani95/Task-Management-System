import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const login = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8080/api/v1/auth/login",
        formData
      );
      localStorage.setItem("token", response.data.data);
      alert("Login Successfully");

      console.log(response.data);
      navigate("/home");

      setFormData({
        email: "",
        password: "",
      });
    } catch (e) {
      console.error("Login failed:", e);
      alert("Login failed!");
    }
  };

  return (
    <>
      <br />
      <div>
        <form>
          <div className="container">
            <div className="row">
              <div className="card col-md-5 offset-md-3">
                <br />
                <h3 className="text-center">Login</h3>
                <div className="card-body">
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="form-control input-item"
                      autoComplete="email"
                      required
                    />
                  </div>
                  <br />

                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      className="form-control input-item"
                      autoComplete="current-password"
                      required
                    />
                  </div>

                  <br />
                </div>

                <div className="d-grid gap-2 col-8 mx-auto">
                  <button
                    onClick={() => {
                      login();
                    }}
                    className="btn btn-primary"
                    type="button"
                  >
                    Login
                  </button>
                  <span className="text-center">OR</span>
                  <Link
                    className="btn btn-outline-dark"
                    type="button"
                    to={"/signup"}
                    style={{ marginBottom: 30 }}
                  >
                    Create New Account
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

export default Login;
