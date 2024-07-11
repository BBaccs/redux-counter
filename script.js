const initialState = {
  todos: [],
  id: 0
};

   // Reducer
   function rootReducer(state = initialState, action) {
    switch (action.type) {
      case "ADD_TODO":
        debugger
        const newState = { ...state };
        newState.id++;
        console.log('newstate', newState, 'action', action)
        return {
          ...newState,
          todos: [...newState.todos, { task: action.task, id: newState.id }]
        };
      case "REMOVE_TODO":
        debugger
        console.log('remopve', action)
        return {
          ...state,
          todos: state.todos.filter(todo => todo.id !== action.id)
        };
      default:
        return state;
    }
  }

const store = Redux.createStore(rootReducer);

const updateUI = () => {
  const currentState = store.getState();
  const todoList = $("#todo-list");
  todoList.empty();

  currentState.todos.forEach(todo => {
    // console.log('task', todo.task);
    const newTodoItem = $("<li>")
      .addClass("todo-item")
      .text(todo.task);
    
    const removeButton = $("<button>").text("Remove Todo").on("click", function() {
      store.dispatch({
        type: "REMOVE_TODO",
        id: todo.id
      });
    });

    newTodoItem.append(removeButton);
    todoList.append(newTodoItem);
  });
}


$(document).ready(function () {
  // Handle form submission
  $("form").on("submit", function (event) {
    event.preventDefault();
    const newTask = $("#task").val();
    store.dispatch({
      type: "ADD_TODO",
      task: newTask
    });
    $("form").trigger("reset");
  });
  // store.subscribe(updateUI) itself is called only once, but the updateUI
  // function registered as the callback will be called multiple times 
  // throughout the lifecycle of the application. Specifically, the updateUI function is called:
  store.subscribe(updateUI);

  // Initial UI update
  updateUI();
});