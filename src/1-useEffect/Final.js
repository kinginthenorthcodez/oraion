// import React, { useEffect, useState } from "react";

// const Final = () => {
//   const url = "https://api.github.com/users";
//   const [users, setUsers] = useState([]);

//   const getUsers = async () => {
//     const response = await fetch(url);
//     let users = await response.json();
//     setUsers(users);
//   };

//   useEffect(() => {
//     console.log("Useffect in action!");
//     getUsers();
//     // const response = fetch(url).then((res) => res.json());
//     // response.then((res) => {
//     //   console.log(res);
//     // });
//   }, []);

//   return (
//     <>
//       <h3> Git hub users</h3>
//       <ul>
//         {users.map((user) => {
//           const { id, login, avatar_url } = user;
//           return (
//             <li key={id}>
//               <img src={avatar_url} alt={login} />
//               <div>
//                 <h4>{login}</h4>
//               </div>
//             </li>
//           );
//         })}
//       </ul>
//     </>
//   );
// };

// export default Final;
