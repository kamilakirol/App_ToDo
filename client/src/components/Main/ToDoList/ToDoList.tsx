import React, {Dispatch, SetStateAction} from 'react';
import ToDoListItem from "../ToDoListItem/ToDoListItem";
import {Item} from "../../../types";
import {Action} from "../Main";

type Props = {
    // items: Item[],
    // setItems: Dispatch<SetStateAction<Item[]>>,
    formState: Item[],
    dispatch: Dispatch<Action>
}

const ToDoList = ({formState, dispatch}: Props) => {


    return (
        <section className='toDoList'>
            <div className='toDoList_box'>
                <h2 className='toDoList_box_title'>ToDo List!</h2>
                <div className='toDoList_box_items'>
                    {formState.length === 0 ? <p className='toDoList_box_items_info'>No todos here</p> :
                        formState.map((item, index) => {
                                return (
                                    <ToDoListItem
                                        key={item.name}
                                        item={item}
                                        index={index}
                                        formState={formState}
                                        // setItems={setItems}
                                        // state={state}
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