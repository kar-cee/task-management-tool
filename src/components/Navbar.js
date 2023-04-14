import React from 'react'
import './css/navbar.css';
import { Outlet, Link } from 'react-router-dom';
import { FaTasks } from 'react-icons/fa';
export default function Navbar() {
  return (
    <div className='navbar'>
      <FaTasks/>
      <ul>
              <li className="link1"><Link to="/">Dashboard</Link></li>
              <li className="link2"><Link to="/projects">Projects</Link></li>
              <li className="link3"><Link to="/tasks">My Task</Link></li>
              <li className="link4"><Link to="/calander">Calander</Link></li>
              <li className="link5"><Link to="/time">Time manage</Link></li>
              <li className="link6"><Link to="/report">Report</Link></li>
              <li className="link7"><Link to="/setting">Setting</Link></li>
          </ul>
          <Outlet/>
    </div>
  )
}
