import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from './components/dashboard/Dashboard';
function App() {
  return (
    <BrowserRouter>
      <div className='container'>
        <Navbar />
        <div className="main">
          <Routes>
            <Route path="/" element={<Dashboard/>} />
            <Route exact path='/projects' element={<div>Projects</div>} />
            <Route exact path='/tasks' element={<div>Task</div>} />
            <Route path='/calander' element={<div>Calander</div>} />
            <Route path='/time' element={<div>Time</div>} />
            <Route path='/report' element={<div>Report</div>} />
            <Route path="/setting" element={<div>setting</div>} />
          </Routes>
        </div>
      </div>
      
    </BrowserRouter>
  );
}

export default App;
