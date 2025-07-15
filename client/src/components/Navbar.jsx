import { Link } from "react-router-dom";

const Navbar = () => {
  const spacing = {
    margin: "0 10px",
  };

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
                  <li className="nav-item">
                    <Link
                      className="nav-link "
                      to="/assignTask"
                      style={spacing}
                    >
                      Task Assign
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link " to="/" style={spacing}>
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
