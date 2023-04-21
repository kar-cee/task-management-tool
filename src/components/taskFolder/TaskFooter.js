import React from "react";

export default function TaskFooter({
    listItems,
    setlist,
    filteredList,
    setfilteredList,
}) {
    let cursorStyle = {
        cursor: "pointer"
    };
    // function to filter the list
    const filterTodoList = (filterType) => {
        const completedList = listItems.filter((item) => item.completed);
        const activeList = listItems.filter((item) => !item.completed);
        if (filterType === "all") setfilteredList(listItems);
        else if (filterType === "active") setfilteredList(activeList);
        else setfilteredList(completedList);
    };

    function clearCompleted() {
        const completedList = listItems.filter((item) => item.completed)

        if (completedList.length === 0) {
            alert("You don't have any completed list");
            return;
        }
        let confirmation = window.confirm("Completed task will be deleted");
        if (confirmation) {
            let activeList = listItems.filter(item => !item.completed);
            setlist(activeList);
            setfilteredList(activeList)
        }
    }
    return (
        <div className="list-footer">
            <div className="no-of-items">{filteredList.length} items</div>
            <div className="list-type">
                <div className="types all" onClick={() => filterTodoList("all")}>
                    All
                </div>
                <div className="types active" onClick={() => filterTodoList("active")}>
                    Active
                </div>
                <div
                    className="types completed"
                    onClick={() => filterTodoList("complted")}
                >
                    Completed
                </div>
            </div>
            <div
                className="clear-completed"
                style={cursorStyle}
                onClick={clearCompleted}
            >
                Clear completed
            </div>
        </div>
    );
}
