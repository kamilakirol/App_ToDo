import React from 'react';
import AddNewTask from "./AddNewTask/AddNewTask";
import ToDoList from "./ToDoList/ToDoList";
import DeleteTask from "./DeleteTask/DeleteTask";

const Main = () => {
    return (
        <>
            <AddNewTask/>
            <ToDoList/>
            <DeleteTask/>

        </>
    );
};

export default Main;