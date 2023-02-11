import React, {Dispatch, SetStateAction} from 'react';
import ToDoListItem from "../ToDoListItem/ToDoListItem";
import {Item} from "../../../types";
import {Action} from "../Main";

type Props = {
    items: Item[],
    setItems: Dispatch<SetStateAction<Item[]>>,
    state: Item[],
    dispatch: Dispatch<Action>
}

const ToDoList = ({items, setItems, state, dispatch}: Props) => {


    return (
        <section className='toDoList'>
            <div className='toDoList_box'>
                <h2 className='toDoList_box_title'>ToDo List!</h2>
                <div className='toDoList_box_items'>
                    {items.length === 0 ? <p className='toDoList_box_items_info'>No todos here</p> :
                        items.map((item, index) => {
                                return (
                                    <ToDoListItem
                                        key={item.name}
                                        item={item}
                                        index={index}
                                        items={items}
                                        setItems={setItems}
                                        state={state}
                                        dispatch={dispatch}
                                    />
                                )
                            }
                        )
                    }
                </div>
            </div>
        </section>
    );
};

export default ToDoList;