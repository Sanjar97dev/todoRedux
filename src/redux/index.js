import { createStore } from "redux";

const todoState = {
    todos: [],
}

const todoReducer = (state = todoState, action) => {
    switch (action.type) {
        case 'Add_Todo':
            return {
                ...state,
                todos: [...state.todos, { id: Date.now(), text: action.text, completed: false }],
            };
        case 'Toggle_Todo':
            return {
                ...state,
                todos: state.todos.map((todo) =>
                    todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
                ),
            }
        default:
            return state;


    }
}

const store = createStore(todoReducer)

export default store;