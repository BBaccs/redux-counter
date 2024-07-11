// we need a reducer
// we need a store
// we need initial state
// we need some way of changing state

const initialState = {
  count: 0
};

// function rootReducer(state = initialState, action) {
//   switch (action.type) {
//     case "INCREMENT":
//       console.log('INCREMENT', state)
//       return { ...state, count: state.count + 1 };
//     case "DECREMENT":
//       console.log('DECREMENT', state)
//       return { ...state, count: state.count - 1 };
//     default:
//       return state;
//   }
// }

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT":
      var newState = { ...state };
      newState.count++;
      return newState;
    case "DECREMENT":
      var newState = { ...state };
      newState.count--;
      return newState;
    default:
      return state;
  }
}


const store = Redux.createStore(rootReducer);


$(document).ready(function () {
  let currentState = store.getState();
  $("#counter").text(currentState.count);
  $("#increment").on("click", function(){
    store.dispatch({
      type: "INCREMENT"
    });
    currentState = store.getState();
    $("#counter").text(currentState.count);
    console.log(currentState.count)
  });
  $("#decrement").on("click", function(){
    store.dispatch({
      type: "DECREMENT"
    });
    currentState = store.getState();
    $("#counter").text(currentState.count);
  });

  console.log('curerntstate',currentState)
});








// store.dispatch({ type: 'INCREMENT' });






// store = centralized place where state (data in your app) lives
// it's less about the UI for redux


// reducer is a fun that tells the store what the state looks like and how ot make changes to state, reducer is simply a func, it manages state
// 






// $(document).ready(function () {
//   let currentState = store.getState(); // {count: 0}
//   $("#counter").text(currentState.count); // h1 text to be 0

//   $("#increment").on("click", function () {
//     store.dispatch({
//       type: "INCREMENT"
//     });
//     let currentState = store.getState(); // {count: 1}
//     $("#counter").text(currentState.count); // h1 text to be 1
//   });

//   $("#decrement").on("click", function () {
//     store.dispatch({
//       type: "DECREMENT"
//     });
//     let currentState = store.getState(); // {count: 0}
//     $("#counter").text(currentState.count); // h1 text to be 0
//   });
// });