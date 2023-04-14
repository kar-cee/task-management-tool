import React,{useState} from 'react'
import { FaSearch } from 'react-icons/fa'
import "./css/search.css"

export default function Search() {
    const [searchTerm, setsearchTerm] = useState("")
  return (
      <div className="searchBox">
          <label htmlFor="searchBar" id='searchIcon'><FaSearch /></label>
          <input type="text"
              name=""
              id="searchBar"
              placeholder="search"
              value={searchTerm} onInput={(e) => {
                  setsearchTerm(e.target.value)
              }} />
          <button className='deleteBtn' onClick={() => {
              setsearchTerm("")
          }}>X</button>
    </div>
  )
}
