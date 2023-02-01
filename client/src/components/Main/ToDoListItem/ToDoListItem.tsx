import React, {Dispatch, SetStateAction} from 'react';
import {Item} from "../../../types";

type Props = {
    items: Item[],
    setItems: Dispatch<SetStateAction<Item[]>>
    item: Item
    index: number
}

const ToDoListItem = ({setItems, item, index}: Props) => {

    const handleChange = (name: string) => {
        setItems(prevItems => prevItems.map(item => {
            if (item.name === name) {
                return {
                    ...item,
                    done: !item.done
                }
            }
            return item
        }))
    }

    const handleSplice = (i: number) => {
        if (index === i)
            setItems(prevItems => {
                    const updatedArray = [...prevItems]
                    updatedArray.splice(index, 1)
                    return updatedArray
                }
            )
    };

    const handleEdit = (name: string) => {
        setItems(prevItems => prevItems.map(item => {
            return {
                ...item,
                edited: item.name === name ? !item.edited : false
            }
        }))
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
                <i className="fa fa-trash" aria-hidden="true" onClick={() => handleSplice(index)}></i>
            </div>
        </div>

    );
};

export default ToDoListItem;