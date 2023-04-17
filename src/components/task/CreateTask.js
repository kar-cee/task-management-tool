import React, { useState } from 'react'

export default function CreateTask({
    setlist,
    listItems,
    setfilteredList
}) {
    const [inputList, setinputList] = useState("");
    const addTodo = (e) => {
        let id;
        e.preventDefault();
        if (listItems.length === 0) id = 0;
        else id = listItems[listItems.length - 1].id + 1;

        let myTodo = {
            id: id,
            text: inputList,
            completed: false,
        };
        if (inputList) {
            setlist([...listItems, myTodo]);
            setfilteredList([...listItems, myTodo])
            setinputList("");
        } else alert("list can not be empty!");
    };

    const handleOnChange = (e) => {
        setinputList(e.target.value);
    };
    return (
        <div className="input-box">
            <form onSubmit={addTodo}>
                <input
                    type="text"
                    placeholder="Add new Task"
                    value={inputList}
                    className="create-todo"
                    onChange={(e) => {
                        handleOnChange(e);
                    }}
                />
                <input type="submit" value="" />
            </form>
        </div>
    );
}
