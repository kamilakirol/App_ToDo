import React from 'react';
import ToDoListItem from "../ToDoListItem/ToDoListItem";

const ToDoList = ({items, setItems}) => {


    return (
        <section className='toDoList'>
            <div className='toDoList_box'>
                <h2 className='toDoList_box_title'>ToDo List!</h2>
                <div className='toDoList_box_items'>
                    {items.length === 0 ? <p className='toDoList_box_items_info'>No todos here</p> :
                        items.map((item, index) => {
                                return (
                                    <ToDoListItem key={item.id} item={item} index={index}
                                                  items={items} setItems={setItems}/>
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