import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <br />
      <div>
        <form>
          <div className="container">
            <div className="row">
              <div className="card col-md-6 offset-md-3">
                <br />
                <h3 className="text-center">Login</h3>
                <div className="card-body">
                  <div className="form-group">
                    <label htmlFor="usernamr" className="form-label">
                      Username
                    </label>
                    <input
                      type="text"
                      className="form-control input-item"
                      id="username"
                      name="username"
                      autoComplete="username"
                      required
                    />
                  </div>
                  <br />

                  <div className="form-group">
                    <label htmlFor="inputPassword" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      className="form-control input-item"
                      name="password"
                      autoComplete="current-password"
                      required
                    />
                  </div>
                </div>
                <br />

                <div className="d-grid gap-2 col-8 mx-auto">
                  <button className="btn btn-primary" type="button">
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
