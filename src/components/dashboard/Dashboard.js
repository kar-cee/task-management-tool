import React,{useState} from 'react'
import "../css/dashboard.css"
import Search from "../Search"
import TaskList from '../taskFolder/TaskList';
import Calendar from '../Calander';
export default function Dashboard({ listItems, setlist}) {
    const [filteredList, setfilteredList] = useState(listItems)

    return (
        <div className="grid">
            <div className="item1">
                <Search />
            </div>
            <div className="item2">
                <TaskList listItems={listItems}
                    filteredList={filteredList}
                    setlist={setlist}
                    setfilteredList={setfilteredList} />
                
            </div>
            <div className="item3"><Calendar/></div>
            <div className="item4">d</div>
            <div className="item5">d</div>
        </div>
    )
}
