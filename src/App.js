import './App.css';
import { useState,useEffect } from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from './components/dashboard/Dashboard';
import Task from './components/Task';
import Calendar from './components/Calander';
function App() {
  let localTask = localStorage.getItem("task")
  console.log(localTask)
  // // parsing it into object
  let parsedTodo = JSON.parse(localTask)
  // const SampleTask = [
  //   {
  //     id: 0,
  //     text: "Complete online JavaScript course",
  //     completed: true
  //   },
  //   {
  //     id: 1,
  //     text: "jog around the pard",
  //     completed: false
  //   },
  //   {
  //     id: 2,
  //     text: "10 minute meditation",
  //     completed: false
  //   },
  //   {
  //     id: 3,
  //     text: "read for 1 hour",
  //     completed: false
  //   },
  //   {
  //     id: 4,
  //     text: "Pick up groceries",
  //     completed: false
  //   },
  //   {
  //     id: 5,
  //     text: "Complete Todo App on FrontEnd Mentor",
  //     completed: false
  //   }
  // ]
  // const [listItems, setlist] = useState(SampleTask)
  const [listItems, setlist] = useState(parsedTodo)
  useEffect(() => {
    localStorage.setItem("task", JSON.stringify(listItems))
  }, [listItems])
  return (
    <BrowserRouter>
      <div className='container'>
        <Navbar />
        <div className="main">
          <Routes>
            <Route path="/" element={<Dashboard listItems={listItems} setlist={setlist} />} />
            <Route exact path='/projects' element={<div>Projects</div>} />
            <Route exact path='/tasks' element={<Task
              listItems={listItems} setlist={setlist} />} />
            <Route path='/calander' element={<Calendar/>} />
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
