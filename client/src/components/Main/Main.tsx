import React, {useState, useRef, useEffect, useReducer} from 'react';
import AddNewTask from "./AddNewTask/AddNewTask";
import ToDoList from "./ToDoList/ToDoList";
import DeleteTask from "./DeleteTask/DeleteTask";
import {Item} from "../../types";

type State = Item[]

export type Action =
    | { type: 'ADD', name: string }
    | { type: 'DELETE', name: string }
    | { type: 'EDIT', name: string, isEditMode: boolean }
    | { type: 'MARK_DONE', name: string, done: boolean }
    | { type: 'DELETE_DONE' }
    | { type: 'DELETE_ALL' }

const initialState: State = []

const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case 'ADD':
            return [...state, {name: action.name, done: false, edited: false}]

        case 'EDIT':
            const updatedState = state.map((item => ({...item, edited: false})))

            let index = state.findIndex((item) => item.edited)

            if (action.isEditMode) {
                index = state.findIndex((item) => item.name === action.name)
            }
            const editedItem = {...updatedState[index], name: action.name, edited: action.isEditMode}
            updatedState.splice(index, 1, editedItem)
            return updatedState

        case 'MARK_DONE':
            const stateToDone = [...state]
            const doneIndex = state.findIndex((item) => item.name === action.name)
            const doneItem = {...stateToDone[doneIndex], done: !action.done}
            stateToDone.splice(doneIndex, 1, doneItem)
            return stateToDone

        case 'DELETE':
            const taskToDelete = [...state]
            const newIndex = state.findIndex((item) => item.name === action.name)
            taskToDelete.splice(newIndex, 1)
            return taskToDelete

        case 'DELETE_DONE':
            return [...state].filter((item) => !item.done)


        case "DELETE_ALL":
            const deleteAllTask = [...state]
            deleteAllTask.splice(0, deleteAllTask.length)
            return deleteAllTask
        default:
            return state;
    }
}

const Main = () => {
    // const [items, setItems] = useState<Item[]>([]);
    const [formState, dispatch] = useReducer(reducer, initialState)
    const inputEl = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        inputEl.current?.focus();
    }, [formState])

    return (
        <>
            <AddNewTask
                // setItems={setItems}
                // items={items}
                inputEl={inputEl}
                formState={formState}
                dispatch={dispatch}
            />
            <ToDoList
                // items={items}
                // setItems={setItems}
                formState={formState}
                dispatch={dispatch}
            />
            <DeleteTask
                // setItems={setItems}
                dispatch={dispatch}
            />
        </>
    );
};

export default Main;