// import { useState } from "react";

// const ErrorExample = () => {
//   const data = ["krab", "fish", "octopus", "Squiddy"];
//   const [title, setTitle] = useState("Random Title");

//   const [users, setUsers] = useState(data);

//   const changeTitle = () => {
//     if (title == "Random Title") {
//       setTitle("Hello World React");
//     } else {
//       setTitle("Random Title");
//     }

//     console.log(title);
//   };

//   const changeUser = (id) => {
//     // console.log(e.target.parentNode);
//     console.log(id);

//     let newusers = users.filter((user, index) => {
//       let datas = users;
//       if (index == id) {
//         user = "New user";
//         data[index] = user;
//         console.log(...data, (data[index] = user));
//       }
//       return [...data, (data[index] = user)];
//     });
//     setUsers(data);
//   };
//   return (
//     <>
//       <h1>{title}</h1>
//       {users.map((user, index) => {
//         console.log(user);
//         return (
//           <>
//             <h2 key={index}>{user}</h2>
//             <button type="button" onClick={() => changeUser(index)}>
//               UpdateUser
//             </button>
//           </>
//         );
//       })}
//       <button type="button" onClick={changeTitle}>
//         Change title
//       </button>
//     </>
//   );
// };

// export default ErrorExample;
