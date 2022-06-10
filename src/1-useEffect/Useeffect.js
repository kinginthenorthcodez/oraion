// import React, { useEffect, useState } from "react";

// const UseEffects = () => {
//   const [value, setValue] = useState(window.innerWidth);

//   const handleResize = () => {
//     setValue(window.innerWidth);
//   };

//   const handleClick = () => {
//     console.log("handleClick");
//     setValue(value + 1);
//   };

//   useEffect(() => {
//     console.log("useEffects render");
//     // const h2 = document.getElementsByTagName("h2");
//     // h2[0].textContent = `Hello React useEffect! ${value}`;
//     window.addEventListener("resize", handleResize);

//     return () => {
//       console.log("clean up");
//       window.removeEventListener("resize", handleResize);
//     };
//   }, [handleResize]);
//   console.log("render component");
//   return (
//     <>
//       <p>{value} px</p>
//       <button type="button" onClick={handleClick}>
//         Click me
//       </button>
//     </>
//   );
// };

// export default UseEffects;
