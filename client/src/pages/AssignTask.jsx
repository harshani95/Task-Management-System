import axios from "axios";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link, useNavigate } from "react-router-dom";

const AssignTask = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [employee, setEmployee] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [status, setStatus] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const saveTask = async (e) => {
    const token = localStorage.getItem("token");
    e.preventDefault();

    if (!name || !employee || !status || !startDate || !endDate) {
      setErrorMessage("Please fill in all fields before saving.");
      return;
    }

    setErrorMessage("");
    try {
      const response = await axios.post(
        "http://localhost:8080/api/v1/admin/save",
        {
          name,
          employee,
          startDate,
          endDate,
          status,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response);

      setName("");
      setEmployee("");
      setStartDate(""), setEndDate(""), setStatus("");

      navigate("/dashboard");
    } catch (err) {
      console.error(err);
      setErrorMessage("Something went wrong while saving the task.");
    }
  };

  const inlineStyles = {
    title: {
      color: "#487eb0",
    },
    buttonSpace: {
      marginRight: "20px",
    },
  };
  return (
    <>
      <br />
      <div>
        <div className="container">
          <div className="row ">
            <div className="card col-md-5 offset-md-3">
              <br />
              <h3 className="text-center colour" style={inlineStyles.title}>
                Assign Task To Team member
              </h3>
              <div className="card-body">
                <form onSubmit={saveTask}>
                  <div className="form-group">
                    <label htmlFor="taskName">Task Name </label>
                    <input
                      className="form-control"
                      id="taskName"
                      type="text"
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                      value={name}
                      required
                    />
                  </div>
                  <br />

                  <div className="form-group">
                    <label htmlFor="employee">
                      Assign Task To Team member{" "}
                    </label>
                    <input
                      className="form-control"
                      id="employee"
                      type="text"
                      onChange={(e) => {
                        setEmployee(e.target.value);
                      }}
                      value={employee}
                      required
                    />
                  </div>
                  <br />

                  <div className="form-group">
                    <label htmlFor="startDate">Task Created Date </label>
                    <br />
                    <DatePicker
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                    />
                  </div>
                  <br />

                  <div className="form-group">
                    <label htmlFor="endDate">Task Deadline Date </label>
                    <br />
                    <DatePicker
                      selected={endDate}
                      onChange={(date) => setEndDate(date)}
                    />
                  </div>
                  <br />

                  <div className="form-group">
                    <label htmlFor="status">Status </label>
                    <input
                      className="form-control"
                      id="status"
                      type="text"
                      onChange={(e) => {
                        setStatus(e.target.value);
                      }}
                      value={status}
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
                    className="btn btn-warning button-space"
                    style={inlineStyles.buttonSpace}
                    type="submit"
                  >
                    Save Task{" "}
                  </button>
                  <Link
                    className="btn btn-danger"
                    type="submit"
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

export default AssignTask;
