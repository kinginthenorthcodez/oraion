import React, { useReducer, useState } from "react";
import Modal from "./modal";
import data from "../birthday/Data";
import { reducer } from "./reducer";

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
      const newITem = { id: new Date().getTime().toString(), name };
      dispatch({ type: "ADD_ITEM", payload: newITem });

      setName("");
      console.log(state.people);
    } else {
      dispatch({ type: "NO_VALUE" });
    }
  };

  const closeModal = () => {
    dispatch({ type: "CLOSE_MODAL" });
  };

  console.log(state.people);
  return (
    <>
      <h2>useReducer</h2>
      {state.isModalOpen && (
        <Modal modalContent={state.modalContent} closeModal={closeModal} />
      )}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">submit</button>
      </form>

      <div>
        {state.people.map((person) => {
          return (
            <div key={person.id}>
              <h4>{person.name}</h4>
              <button
                type="button"
                onClick={() =>
                  dispatch({ type: "REMOVE_ITEM", payload: person.id })
                }
              >
                remove
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default UseReducer;
