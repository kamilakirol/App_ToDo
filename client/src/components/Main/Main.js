import React, {useState, useRef, useEffect} from 'react';
import AddNewTask from "./AddNewTask/AddNewTask";
import ToDoList from "./ToDoList/ToDoList";
import DeleteTask from "./DeleteTask/DeleteTask";

const Main = () => {
    const [items, setItems] = useState([]);
    const inputEl = useRef(null);

    useEffect(() => {
        inputEl.current.focus();
    }, [items])

    return (
        <>
            <AddNewTask setItems={setItems} items={items} inputEl={inputEl}/>
            <ToDoList items={items} setItems={setItems}/>
            <DeleteTask setItems={setItems}/>
        </>
    );
};

export default Main;