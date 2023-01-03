import React from 'react';

const ToDoList = () => {
    return (
        <section className='toDoList'>
            <div className='toDoList_container container'>
                <div className='toDoList_box'>
                    <h2 className='toDoList_box_title'>ToDo List Here!</h2>
                    <ul className='toDoList_box_list'>
                        <li className='toDoList_box_list_li'>Pierwsze zadanie</li>
                    </ul>
                </div>
            </div>


        </section>
    );
};

export default ToDoList;