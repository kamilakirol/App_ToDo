import React, {Dispatch, SetStateAction} from 'react';
import {Item} from "../../../types";
import {Action} from "../Main";

type Props = {
    // items: Item[],
    // setItems: Dispatch<SetStateAction<Item[]>>
    item: Item
    index: number
    formState: Item[],
    dispatch: Dispatch<Action>
}

const ToDoListItem = ({item, index, formState, dispatch}: Props) => {

    const handleChange = (name: string) => {
        dispatch({type: 'MARK_DONE', name: name, done: item.done})
        // setItems(prevItems => prevItems.map(item => {
        //     if (item.name === name) {
        //         return {
        //             ...item,
        //             done: !item.done
        //         }
        //     }
        //     return item
        // }))
    }

    const handleSplice = (name: string) => {
        dispatch({type: 'DELETE', name: name})
        // if (index === i)
        //     setItems(prevItems => {
        //             const updatedArray = [...prevItems]
        //             updatedArray.splice(index, 1)
        //             return updatedArray
        //         }
        //     )s
    };

    const handleEdit = (name: string) => {

        dispatch({type: 'EDIT', name: name, isEditMode: !item.edited})

        // setItems(prevItems => prevItems.map(item => {
        //     return {
        //         ...item,
        //         edited: item.name === name ? !item.edited : false
        //     }
        // }))
    }

    return (
        <div className='toDoListItem'>
            <div className='todoListItem_task'>
                <p className={`${item.done ? 'done' : ''} todoListItem_task_title`}>{item.name}</p>
            </div>
            <div className='toDoListItem_btns'>
                <input
                    type='checkbox'
                    name='check'
                    checked={item.done}
                    onChange={() => handleChange(item.name)}
                ></input>
                <i className={!item.edited ? 'fa fa-pencil-square-o' : 'fa fa-window-close'} aria-hidden="true"
                   onClick={() => handleEdit(item.name)}></i>
                <i className="fa fa-trash" aria-hidden="true" onClick={() => handleSplice(item.name)}></i>
            </div>
        </div>

    );
};

export default ToDoListItem;