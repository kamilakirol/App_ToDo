import React from 'react';

const AddNewTask = () => {
    return (
        <section className='addNewTask'>
            <div className='container addNewTask_container'>
                <form className='addNewTask_form'>
                    <input className='addNewTask_form_input'/>
                    <button className='addNewTask_form_button'>Add New Task</button>

                </form>

            </div>
        </section>
    );
};

export default AddNewTask;