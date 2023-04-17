import React, { useState } from 'react';

import CreateTask from './task/CreateTask';
import TaskList from './task/TaskList'
import TaskFooter from './task/TaskFooter';


function Task({ listItems, setlist}) {
    
    const [filteredList, setfilteredList] = useState(listItems)
    return (
        <div>
            <CreateTask listItems={listItems} setlist={setlist} setfilteredList={setfilteredList} />
            <TaskList listItems={listItems} setlist={setlist} test={"hello"}
                filteredList={filteredList} setfilteredList={setfilteredList} />
            <TaskFooter listItems={listItems} setlist={setlist}
                filteredList={filteredList} setfilteredList={setfilteredList} />
        </div>
    );
}

export default Task;
