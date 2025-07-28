import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const UpdateTask = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [updateStatus, setUpdateStatus] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const updateTask = async (id) => {
    const token = localStorage.getItem("token");
    if (!updateStatus) {
      setErrorMessage("required before updating.");
      return;
    }

    setErrorMessage("");
    try {
      await axios.put(
        `http://localhost:8080/api/v1/admin/update/${id}`,
        {
          status: updateStatus,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      navigate("/dashboard");
    } catch (err) {
      console.error(err);
      setErrorMessage("Something went wrong while update the task.");
    }
  };

  const loadTask = async (id) => {
    const token = localStorage.getItem("token");
    try {
      const response = await axios.get(
        `http://localhost:8080/api/v1/admin/get-by-id/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const taskData = response.data.data;
      console.log(response.data.data);

      setUpdateStatus(taskData.status);
    } catch (error) {
      console.error("Error fetching Task:", error);
    }
  };

  useEffect(() => {
    loadTask(id);
  }, [id]);

  return (
    <>
      <br />
      <div>
        <div className="container">
          <div className="row ">
            <div className="card col-md-5 offset-md-3">
              <br />
              <h2 className="text-center colour">Update Task Status</h2>
              <div className="card-body back">
                <form>
                  <div className="form-group">
                    <label htmlFor="taskDescription">Status </label>
                    <input
                      className="form-control"
                      id="taskDescription"
                      type="text"
                      onChange={(e) => setUpdateStatus(e.target.value)}
                      value={updateStatus}
                      required
                    />
                  </div>
                  <br />

                  {errorMessage && (
                    <div className="alert alert-danger" role="alert">
                      {errorMessage}
                    </div>
                  )}

                  <button
                    className="btn btn-success"
                    style={{ marginRight: "20px" }}
                    type="button"
                    onClick={() => updateTask(id)}
                  >
                    Update Status
                  </button>
                  <Link
                    className="btn btn-danger"
                    type="button"
                    to={"/dashboard"}
                  >
                    Cancel
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateTask;
