import axios from 'axios';
import { useEffect, useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import { Link } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import '../../App.css'

interface Task{
    id:number,
    name:string,
    employee:string,
    startDate:Date,
    endDate:Date,
    status:string
}

const Dashboard = () => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [searchText, setSearchText] = useState("");
    const [searchEmployee, setSearchEmployee] = useState("");
    const [searchStatus, setSearchStatus] = useState("");
  
  
    useEffect(()=> {
        getAllTask();
    }, [searchText]);
  
    const getAllTask = async () => {
        const response = await axios.get("http://localhost:8080/api/v1/tasks/get-all-tasks");
        
          console.log(response.data.data);
          setTasks(response.data.data);
      };
  
  
    
    const deleteTask = async (id:number) => {
        await axios.delete('http://localhost:8080/api/v1/tasks/delete/'+id);
        getAllTask();
    }


    const searchByEmployee = async () => {
        const response = await axios.get(`http://localhost:8080/api/v1/tasks/get-by-employee/${searchEmployee}`);
        setTasks(response.data.data);
        console.log(response.data.data);
        
    };

    const searchByStatus = async () => {
        const response = await axios.get(`http://localhost:8080/api/v1/tasks/get-by-status/${searchStatus}`);
        setTasks(response.data.data);
    };

  
    return (
      <>
      <Navbar />
      <br />
      <div className='container'>
        <div className='one-line'>
        <form className="d-flex col-6" role="search" onSubmit={searchByEmployee}>
            <input className="form-control me-2" type="search" value={searchEmployee} onChange={(e) => setSearchEmployee(e.target.value)} placeholder="Search by Team member" aria-label="Search"/>
            <button className="btn btn-outline-success" type="submit">Search</button>
        </form>

        <form className="d-flex col-4" role="search" onSubmit={searchByStatus}>
            <input className="form-control me-2" type="search" value={searchStatus} onChange={(e) => setSearchStatus(e.target.value)} placeholder="Search by Status " aria-label="Search"/>
            <button className="btn btn-outline-success" type="submit">Search</button>
        </form><br />
        </div><br />

        <div className="row">
            <div className="col-12">
  
                <table className='table table-hover table-bordered'>
                    <thead>
                        <tr className="table-primary">
                            <th>Id</th>
                            <th>Task Name</th>
                            <th>Assigned To Employee Name</th>
                            <th>Task Assign Date</th>
                            <th>Task Deadline</th>
                            <th>Status</th>
                            <th colSpan={2}>Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tasks.map((task,index) => (
                            <tr key={index} className='table-secondary'>
                                <td>{task.id}</td>
                                <td>{task.name}</td>
                                <td>{task.employee}</td>
                                <td>{new Date(task.startDate).toLocaleDateString()}</td>
                                <td>{new Date(task.endDate).toLocaleDateString()}</td>
  
                                      {/* <td>{staskAsign.startDate.toISOString()}
                                      <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                                      </td>
                                      <td>{task.endDate.toISOString()}
                                      <DatePicker selected={endDate} onChange={(date) => setEndDate(date)} />
                                      </td> */}
                                <td>{task.status}</td>
  
                                <td>
                                    <Link  to={`/updateStatus/${task.id}`}className='btn btn-success btn-sm'>Update</Link>
                                </td>
                                <td>
                                    <button className='btn btn-danger btn-sm'
                                    onClick={()=>{if (confirm('are you sure?')){deleteTask(task.id) }}}
                                    >Delete</button>
                                </td>   
                            </tr>
                             ))}
                     </tbody>
                </table>
      
            </div>
        </div>
    </div>
    </>
     )
    }


export default Dashboard