import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import AssignTask from "./pages/AssignTask";
import UpdateTask from "./pages/UpdateTask";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/assignTask" element={<AssignTask />}></Route>
          <Route path="/updateStatus/:id" element={<UpdateTask />}></Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
