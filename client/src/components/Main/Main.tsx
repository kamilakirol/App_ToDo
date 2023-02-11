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

const initialState: State = []

const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case 'ADD':
            console.log('add')
            return [...state, {name: action.name, done: false, edited: false}]
        case 'EDIT':
            console.log('edit')

            const updatedState = [...state]
            const index = state.findIndex((item) => item.name === action.name)
            const editedItem = {...updatedState[index], name: action.name, edited: action.isEditMode}

            updatedState.splice(index, 1, editedItem)
            return updatedState


        case 'DELETE':
            console.log('delete')
            const newState = [...state]
            const newIndex = state.findIndex((item) => item.name === action.name)
            newState.splice(newIndex, 1)
            return newState

        // const newState = [...state]
        // const newIndex = state.findIndex((item) => item.name === action.name)
        // newState.push(newState[newIndex])
        // newState.splice(0, newState.length)
        // return newState
        default:
            return state;
    }
}

const Main = () => {
    const [items, setItems] = useState<Item[]>([]);
    const [state, dispatch] = useReducer(reducer, initialState)
    const inputEl = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        inputEl.current?.focus();
    }, [items])

    return (
        <>
            <AddNewTask
                setItems={setItems}
                items={items}
                inputEl={inputEl}
                state={state}
                dispatch={dispatch}
            />
            <ToDoList
                items={items}
                setItems={setItems}
                state={state}
                dispatch={dispatch}
            />
            <DeleteTask
                setItems={setItems}
                dispatch={dispatch}
            />
        </>
    );
};

export default Main;