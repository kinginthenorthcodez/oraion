import React, { useReducer, useState } from "react";
import Modal from "./modal";
import data from "../birthday/Data";

const reducer = (state, action) => {};
const defaultState = {
  people: [],
  isModalOpen: false,
  modalContent: "",
};
const UseReducer = () => {
  // const [people, setPeople] = useState(data);
  // const [show, showModal] = useState(false);
  const [name, setName] = useState("");
  const [state, dispatch] = useReducer(reducer, defaultState);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      showModal(true);
      setPeople((people) => {
        return [...people, { id: new Date().getTime().toString(), name }];
      });
      setName("");
      console.log(people);
    } else {
      showModal(true);
    }
  };

  console.log(people);
  return (
    <>
      <h2>useReducer</h2>
      {show && <Modal />}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">submit</button>
      </form>

      <div>
        {people.map((person) => {
          return (
            <div key={person.id}>
              <h4>{person.name}</h4>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default UseReducer;
