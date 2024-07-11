const initialState = {
  todos: [],
  id: 0
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_TODO":
    const newState = { ...state }
    newState.id++
    return {
      ...newState,
      todos: [...newState.todos, {task: action.task, id: newState.id}]
    };
    case "REMOVE_TODO":
    default:
      return state;
  }
}

const store = Redux.createStore(rootReducer);

$(document).ready(function () {
  $("form").on("submit", function (event) {
    event.preventDefault();
    let newTask = $("#task").val();
    store.dispatch({
      type: "ADD_TODO",
      task: newTask
    });
    console.log('hi', newTask)
    $("form").trigger("reset");
  })
});





























// const initialState = {
//   count: 0
// };

// function rootReducer(state = initialState, action) {
//   switch (action.type) {
//     case "INCREMENT":
//       var newState = { ...state };
//       newState.count++;
//       return newState;
//     case "DECREMENT":
//       var newState = { ...state };
//       newState.count--;
//       return newState;
//     default:
//       return state;
//   }
// }

// const store = Redux.createStore(rootReducer);

// $(document).ready(function() {
//   let currentState = store.getState(); // {count: 0}
//   $("#counter").text(currentState.count); // h1 text to be 0

//   $("#increment").on("click", function() {
//     store.dispatch({
//       type: "INCREMENT"
//     });
//     let currentState = store.getState(); // {count: 1}
//     $("#counter").text(currentState.count); // h1 text to be 1
//   });

//   $("#decrement").on("click", function() {
//     store.dispatch({
//       type: "DECREMENT"
//     });
//     let currentState = store.getState(); // {count: 0}
//     $("#counter").text(currentState.count); // h1 text to be 0
//   });
// });