import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createStore } from "redux";
import allReducers from "./reducers";
import { Provider } from "react-redux";

const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// store

// //Action
// const increament = () => {
//   return {
//     type: "INCREAMENT",
//   };
// };

// const decreament = () => {
//   return {
//     type: "DECREAMENT",
//   };
// };

// //reducer
// const reducer = (state = 0, action) => {
//   switch (action.type) {
//     case "INCREAMENT":
//       return state + 1;
//     case "DECREAMENT":
//       return state - 1;
//     case "Hello":
//       return state + 5;
//   }
// };

// let store = createStore(reducer);

// store.subscribe(() => console.log(store.getState()));
// //dispatch
// store.dispatch(increament());
// store.dispatch(increament());
// store.dispatch({ type: "Hello" });

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
