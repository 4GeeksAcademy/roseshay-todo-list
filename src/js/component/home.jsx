import React from "react";
import ToDoList from "../ToDo-list.js";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<h1 className="text-center mt-5">ToDo List</h1>
				<div>
					<ToDoList />
				</div>
			</div>
	);
};

export default Home;