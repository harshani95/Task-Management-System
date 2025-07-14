import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <>
      <br />
      <div>
        <form>
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
                      className="form-control input-item"
                      autoComplete="usernamme"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="username" className="form-label">
                      Username
                    </label>
                    <input
                      type="text"
                      id="username"
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
                    to={"/login"}
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
