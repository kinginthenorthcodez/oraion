import React from "react";
import UseReducer from "./1-useReducer";

const App = () => {
  return (
    <>
      <h2>Hooks </h2>
      <UseReducer />
    </>
  );
};

// const Book = (props) => {
//   console.log(props);
//   const { title, author } = props;
//   return (
//     <>
//       <h1>{title}</h1>
//       <h4>{author}</h4>
//       {props.children}
//     </>
//   );
// };

export default App;
