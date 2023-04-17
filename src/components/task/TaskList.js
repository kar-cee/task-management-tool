import React from "react";
import "../css/task.css";
import deleteIcon from '../img/icon-cross.svg';
export default function TaskList({
        listItems,
        setlist,
        filteredList,
        setfilteredList
    })
     {
    let checkedListStyle = {
        textDecoration: "line-through",
        color: "rgb(75, 76, 77)",
    };

    function onDelete(listId) {
        // here i need to add a confirmation functionality
        let final = window.confirm("This task will be Deleted from your Todo-List");
        if (final) {
            const afterDeletion =
                listItems.filter((list) => {
                    return listId !== list.id;
                })
            setlist(afterDeletion)
            setfilteredList(afterDeletion)
        }
    }
    const handleOnchecked = (id) => {
        let updatedTodos = listItems.map((todo) => {
            if (id === todo.id) todo.completed = !todo.completed;
            return todo;
        });
        setlist(updatedTodos);
    };

    return (<div>
        {
            filteredList.length ? 
                filteredList.map((listItem) => {
                    return (
                        // a unique key must pass to the top parent element when mapping
                        <ul key={listItem.id}>
                            <li className="list-item" >
                                <input
                                    type="checkbox"
                                    name={`checkbox${listItem.id}`}
                                    onChange={() => {
                                        handleOnchecked(listItem.id);
                                    }}
                                    checked={listItem.completed}
                                />
                                <div
                                    className="list-text"
                                    style={listItem.completed ? checkedListStyle : {}}
                                >
                                    {listItem.text}
                                </div>
                                <button
                                    className="cross-btn"
                                    onClick={() => {
                                        onDelete(listItem.id);
                                    }}
                                >
                                    {/* <div className="cross-icon">X</div>
                                     */}
                                    <img src={deleteIcon} alt="delete" />
                                </button>
                            </li>
                            <div className="bottom-line"></div>
                        </ul>
                    );
                })
             : 
            <div className="list-text">Nathing to display</div>
            
        }
    </div>);
}
