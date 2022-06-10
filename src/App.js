import React from "react";
import PropsType from "./1-PropTypes/Proptypes";

const App = () => {
  return (
    <>
      <h2>Hooks </h2>
      <PropsType />
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
