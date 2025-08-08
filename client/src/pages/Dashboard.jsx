import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import axiosInstance from "../../api/axiosInstance";
import { jwtDecode } from "jwt-decode";

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [searchText] = useState("");
  const [searchEmployee, setSearchEmployee] = useState("");
  const [userRole, setUserRole] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const decodedToken = jwtDecode(token);
      setUserRole(decodedToken.role[0]);
    }
    getAllTask();
  }, [searchText]);

  const getAllTask = async () => {
    try {
      const response = await axiosInstance.get("/admin-user/get-all-tasks");

      console.log(response.data.data);
      setTasks(response.data.data);
    } catch (error) {
      console.error("Failed to fetch tasks:", error);
      alert("Unauthorized! Please login.");
    }
  };

  const deleteTask = async (id) => {
    try {
      await axiosInstance.delete("/admin/delete/" + id);
      getAllTask();
    } catch (error) {
      console.error("Failed to delete task:", error);
      alert("Failed to delete task. Please try again.");
    }
  };

  const searchByEmployee = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.get(
        `/admin/get-by-employee/${searchEmployee}`
      );
      setTasks(response.data.data);
      console.log(response.data.data);
    } catch (error) {
      console.error("Error searching by employee:", error);
    }
  };

  return (
    <>
      <Navbar />
      <br />
      <div className="container">
        <form
          className="d-flex col-6"
          role="search"
          onSubmit={searchByEmployee}
        >
          <input
            className="form-control me-2"
            type="search"
            value={searchEmployee}
            onChange={(e) => setSearchEmployee(e.target.value)}
            placeholder="Search by Team member"
            aria-label="Search"
          />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>

        <br />

        <div className="row">
          <div className="col-12">
            <table className="table table-hover table-bordered">
              <thead>
                <tr className="table-primary">
                  <th>Id</th>
                  <th>Task Name</th>
                  <th>Team Member</th>
                  <th>Task Assign Date</th>
                  <th>Task Deadline</th>
                  <th>Status</th>
                  <th colSpan={2}>Options</th>
                </tr>
              </thead>
              <tbody>
                {tasks.map((task, index) => (
                  <tr key={index} className="table-secondary">
                    <td>{task.id}</td>
                    <td>{task.name}</td>
                    <td>{task.employee}</td>
                    <td>{new Date(task.startDate).toLocaleDateString()}</td>
                    <td>{new Date(task.endDate).toLocaleDateString()}</td>

                    <td>{task.status}</td>

                    <td>
                      <Link
                        to={`/updateStatus/${task.id}`}
                        className="btn btn-success btn-sm"
                        style={{
                          pointerEvents: userRole !== "ADMIN" ? "none" : "auto",
                          opacity: userRole !== "ADMIN" ? 0.5 : 1,
                        }}
                      >
                        Update
                      </Link>
                    </td>
                    <td>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => {
                          if (
                            userRole === "ADMIN" &&
                            confirm("are you sure?")
                          ) {
                            deleteTask(task.id);
                          }
                        }}
                        disabled={userRole !== "ADMIN"}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
