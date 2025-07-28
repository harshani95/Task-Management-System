import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    role: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const signup = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/api/v1/auth/signup",
        formData
      );
      console.log(response);
      alert("Registation Successfully");

      navigate("/");

      setFormData({
        username: "",
        email: "",
        password: "",
        role: "",
      });
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
                    <input
                      type="text"
                      id="username"
                      value={formData.username}
                      onChange={handleChange}
                      name="username"
                      placeholder="Username"
                      className="form-control input-item"
                      autoComplete="given-name"
                      required
                    />
                  </div>
                  <br />
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      placeholder="Email"
                      id="email"
                      onChange={handleChange}
                      className="form-control input-item"
                      autoComplete="email"
                      required
                    />
                  </div>
                  <br />

                  <div className="form-group">
                    <input
                      type="password"
                      name="password"
                      value={formData.password}
                      placeholder="Password"
                      id="password"
                      onChange={handleChange}
                      className="form-control input-item"
                      autoComplete="current-password"
                      required
                    />
                  </div>
                  <br />

                  <div className="form-group">
                    <input
                      type="text"
                      name="role"
                      value={formData.role}
                      placeholder="Role (User, Admin)"
                      id="role"
                      onChange={handleChange}
                      className="form-control input-item"
                      autoComplete="role"
                      required
                    />
                  </div>
                  <br />
                </div>

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
