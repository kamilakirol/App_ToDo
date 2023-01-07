import React, {useState} from 'react';
import AddNewTask from "./AddNewTask/AddNewTask";
import ToDoList from "./ToDoList/ToDoList";
import DeleteTask from "./DeleteTask/DeleteTask";

const Main = () => {
    const [items, setItems] = useState([]);

    return (
        <>
            <AddNewTask setItems={setItems} items={items}/>
            <ToDoList items={items} setItems={setItems}/>
            <DeleteTask setItems={setItems}/>
        </>
    );
};

export default Main;