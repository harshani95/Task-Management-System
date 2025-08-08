import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

const Navbar = () => {
  const spacing = {
    margin: "0 10px",
  };

  const [userRole, setUserRole] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decoded = jwtDecode(token);
        setUserRole(decoded.role[0]); // example: "ADMIN" or "USER"
      } catch (error) {
        console.error("Failed to decode token", error);
      }
    }
  }, []);

  return (
    <>
      <div>
        <nav
          className="navbar bg-dark border-bottom border-body"
          data-bs-theme="dark"
        >
          <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
              <a className="navbar-brand spacing" to="#">
                Task Management System
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link
                      className="nav-link active"
                      aria-current="page"
                      href="/home"
                      style={spacing}
                    >
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link " to="/dashboard" style={spacing}>
                      Dashboard
                    </Link>
                  </li>
                  {userRole === "ADMIN" && (
                    <li className="nav-item">
                      <Link
                        className="nav-link"
                        to="/assignTask"
                        style={spacing}
                      >
                        Task Assign
                      </Link>
                    </li>
                  )}
                  <li className="nav-item">
                    <Link
                      className="nav-link "
                      to="/"
                      style={spacing}
                      onClick={() => {
                        localStorage.removeItem("token");
                        localStorage.removeItem("userRole");
                      }}
                    >
                      LogOut
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
