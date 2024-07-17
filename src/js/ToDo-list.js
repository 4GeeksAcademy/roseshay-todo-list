
import React, { useState } from "react";


const ToDoList = () => {
    const [todoItems, setToDoItems] = useState([]);
    const [newItem, setNewItem] = useState("");

    const handleAddItem = () => {
        if (newItem) {
            setToDoItems([...todoItems, newItem]);
            setNewItem("");
        }
    };


    const handleKeyPress = (e) => {
        if (e.Key === "Enter") {
            handleAddItem();
        }
    };

    const handleDeleteItem = (index) => {
        const newToDoItem = [...toDoItems];
        newToDoItem.splice(index, 1);
        setToDoItems(newToDoItem);
    };

    return (
        <div className="container mt-4">
            <div className="raw justify-content-center">
                <div className="col-md-8">
                    <h2 className="text-center mb-4"></h2>
                    <div className="input-group mb-1">
                        <Input
                            type="text"
                            classname="form-control"
                            placeholder="Add new item"
                            value={newitem}
                            onchange={(e) => setNewItem(e.target.value)}
                            onkeydown={handleKeyPress}
                        />
                        <div className="input-group-append">
                            <button
                                className="btn btn-outline-secondary"
                                type="button"
                                onclick={handleAddItem}
                            >
                                Add
                            </button>
                        </div>
                    </div>
                    <ul className="List-group">
                        {...toDoItems.map((item, index) => (
                            <li
                                key={index}
                                className="list-group-item d-flex justify-content-between align-items-center"
                            >
                                {item}
                                <button
                                    className="btn btn-danger btn-sm ex-5"
                                    onClick={() => handleDeleteItem(index)}
                                >
                                    Delete
                                </button>
                            </li>
                        ))}
                    </ul>
            </div>
        </div >
    </div >
    );
};
export default ToDoList;