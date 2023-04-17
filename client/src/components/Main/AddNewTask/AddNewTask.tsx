import React, {
    ChangeEvent,
    Dispatch, FormEvent,
    MutableRefObject,
    SetStateAction,
    useEffect,
    useState
} from 'react';
import {Item} from "../../../types";
import {Action} from "../Main";

type Props = {
    // items: Item[],
    // setItems: Dispatch<SetStateAction<Item[]>>,
    inputEl: MutableRefObject<HTMLInputElement | null>,
    formState: Item[],
    dispatch: Dispatch<Action>
}

const getEditedElement = (state: Item[]) => state.find((e) => e.edited);
const validateName = (state: Item[]) => state.map(e => e.name);

const AddNewTask = ({/*setItems, items,*/ inputEl, formState, dispatch}: Props) => {
    const [error, setError] = useState('');
    const [task, setTask] = useState('');
    const editElement = getEditedElement(formState);
    const elementNames = validateName(formState);

    const handleTaskChange = (e: ChangeEvent<HTMLInputElement>) => {
        setTask(e.target.value)
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (task.length === 0) {
            setError('Please add valid todo!')
            return;
        }

        if (elementNames.includes(task)) {
            setError('This task is in the ToDo list. Please add a new todo')
            return;
        }

        if (task.length >= 25) {
            setError('Please add shorter todo!')
            return;
        }

        if (editElement) {
            dispatch({type: 'EDIT', name: task, isEditMode: false})

        } else {
            dispatch({type: 'ADD', name: task})
        }


        // setItems(prevItems => {
        //     if (editElement) {
        //         const updatedItems = [...prevItems]
        //         const index = updatedItems.findIndex((item) => item.name === editElement.name);
        //         const editedItem = {...editElement, name: task, edited: false};
        //         updatedItems.splice(index, 1, editedItem);
        //         return updatedItems
        //     }
        //
        //     return [...prevItems,
        //         {
        //             name: task,
        //             done: false,
        //             edited: false,
        //         }
        //     ]
        // })
        setError('');
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
                       ref={inputEl}
                />
                <button className='addNewTask_form_button button'>{!editElement ? 'Add New Task' : 'Edit Task'}</button>
                <p className='addNewTask_form_errors'>{error}</p>
            </form>
        </section>
    );
};

export default AddNewTask;