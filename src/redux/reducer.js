const initState = {
    filters: {
        search: "",
        state: "All",
        priority: []
    },
    todoList: [
        { id: 1, name: "learn", completed: false, priority: "Low" }
    ]
}

const rootReducer = (state = initState, action) => {
    console.log({ state, action })
    switch (action.type) {
        case 'todoList/addTodo':
            return {
                ...state,
                todoList: [
                    ...state.todoList,
                    action.payload

                ]
            }
        default: return state
    }
}

export default rootReducer