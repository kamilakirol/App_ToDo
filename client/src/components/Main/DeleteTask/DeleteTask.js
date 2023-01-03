import React from 'react';

const DeleteTask = () => {
    return (
        <section className='deleteTask'>
            <div className='container deleteTask_container'>
                <div className='deleteTask_box'>
                    <button className='deleteTask_box_done'>Delete done tasks</button>
                    <button className='deleteTask_box_all'>Delete all tasks</button>
                </div>

            </div>

        </section>
    );
};

export default DeleteTask;