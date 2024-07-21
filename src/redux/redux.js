import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name: "todo",
    initialState: [
        { id: 1, text: "Faire les courses", done: false },
        { id: 2, text: "Ménage !", done: true },
    ],

    reducers: {
        addTask: (state, action) => {
            // {type: "ADD_TASK", payload: "Aller faire les courses"}
            const newTask = {
                id: Date.now(),
                done: false,
                text: action.payload
            }

            state.push(newTask)
        },
        toggleTask: (state, action) => {
            // { tyoe: "TOGGLE_TASK", payload: 20 }
            const task = state.find((t) => t.id === action.payload)
            task.done = !task.done
        },
        deleteTask: (state, action) => {
            // { type: "DELETE_TASK", payload: 20 }
            state = state.filter((t) => t.id !== action.payload)
            return state;
        },
    }
})

// export const { addTask, deleteTask, toggleTask } = todoSlice.actions;

// export const store = configureStore({
//     reducer: {
//         todo: todoSlice.reducer
//     }
// })