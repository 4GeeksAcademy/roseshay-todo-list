
import React, { useState, useRef } from "react";


const ToDoList = () => {
    const [toDoItems, setToDoItems] = useState([]);
    const [newItem, setNewItem] = useState("");

    const handleAddItem = () => {
        if (newItem) {
            setToDoItems([...toDoItems, newItem]);
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
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <h2 className="text-center mb-4"></h2>
                    <div className="input-group mb-1">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Add new item"
                            value={newItem}
                            onChange={(e) => setNewItem(e.target.value)}
                            onKeyDown={handleKeyPress}
                        />
                        <div className="input-group-append">
                            <button
                                className="btn btn-outline-secondary"
                                type="button"
                                onClick={handleAddItem}
                            >
                                Add
                            </button>
                        </div>
                    </div>
                    <ul className="List-group">
                        {toDoItems.map((item, index) => (
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