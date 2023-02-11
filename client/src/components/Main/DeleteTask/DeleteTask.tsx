import React, {Dispatch, SetStateAction} from 'react';
import {Item} from "../../../types";
import {Action} from "../Main";

type Props = {
    setItems: Dispatch<SetStateAction<Item[]>>,
    dispatch: Dispatch<Action>
}

const DeleteTask = ({setItems, dispatch}: Props) => {

    const deleteAllTasks = () => {
        setItems(prevItems => {
            const taskToDelete = [...prevItems]
            taskToDelete.splice(0, taskToDelete.length)
            return taskToDelete
        })
    }

    const deleteDoneTask = () => {
        setItems(prevItems => prevItems.filter((e) => {
                return !e.done;
            })
        )
    }

    return (
        <section className='deleteTask'>
            <div className='deleteTask_box'>
                <button className='deleteTask_box_done button' onClick={deleteDoneTask}>Delete done tasks</button>
                <button className='deleteTask_box_all button' onClick={deleteAllTasks}>Delete all tasks</button>
            </div>
        </section>
    );
};

export default DeleteTask;