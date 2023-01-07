import React, {useEffect, useState} from 'react';

const getEditedElement = (items) => items.find((item) => item.edit === true);

const AddNewTask = ({setItems, items}) => {
    const [error, setError] = useState(false);
    const [task, setTask] = useState('');
    const editElement = getEditedElement(items);

    const handleTaskChange = (e) => {
        setTask(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (task.length === 0) {
            setError(true)
            return;
        }
        setItems(prevItems => {
            if (editElement) {
                const updatedItems = [...prevItems]
                const index = updatedItems.findIndex((item) => item.name === editElement.name);
                const editedItem = {...editElement, name: task, edit: false};
                updatedItems.splice(index, 1, editedItem);
                return updatedItems
            }

            return [...prevItems,
                {
                    id: prevItems.length + 1,
                    name: task,
                    done: false,
                    edited: false,
                }
            ]
        })
        setError(false);
        setTask('');
    }

    useEffect(() => {
        if (editElement) {
            setTask(editElement.name)
        } else {
            setTask('')
        }
    }, [editElement])


    return (
        <section className='addNewTask'>
            <form className='addNewTask_form'
                  onSubmit={handleSubmit}>
                <input className='addNewTask_form_input'
                       type='text'
                       onChange={handleTaskChange}
                       value={task}
                       placeholder='Add todo'
                />
                <button className='addNewTask_form_button button'>{!editElement ? 'Add New Task' : 'Edit Task'}</button>
                {error ? <p className='addNewTask_form_errors'>Please add valid todo!</p> : ''}
            </form>
        </section>
    );
};

export default AddNewTask;