import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [searchText] = useState("");
  const [searchEmployee, setSearchEmployee] = useState("");

  useEffect(() => {
    getAllTask();
  }, [searchText]);

  const getAllTask = async () => {
    const token = localStorage.getItem("token");
    try {
      const response = await axios.get(
        "http://localhost:8080/api/v1/tasks/get-all-tasks",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log(response.data.data);
      setTasks(response.data.data);
    } catch (error) {
      console.error("Failed to fetch tasks:", error);
      alert("Unauthorized! Please login.");
    }
  };

  const deleteTask = async (id) => {
    const token = localStorage.getItem("token");
    try {
      await axios.delete("http://localhost:8080/api/v1/tasks/delete/" + id, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      getAllTask();
    } catch (error) {
      console.error("Failed to delete task:", error);
      alert("Failed to delete task. Please try again.");
    }
  };

  const searchByEmployee = async (e) => {
    const token = localStorage.getItem("token");
    e.preventDefault();
    try {
      const response = await axios.get(
        `http://localhost:8080/api/v1/tasks/get-by-employee/${searchEmployee}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
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
                      >
                        Update
                      </Link>
                    </td>
                    <td>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => {
                          if (confirm("are you sure?")) {
                            deleteTask(task.id);
                          }
                        }}
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
