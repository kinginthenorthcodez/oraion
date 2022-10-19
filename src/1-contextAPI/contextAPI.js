import React, { useState, useContext } from 'react';
import data from '../birthday/Data';

const PersonContext = React.createContext(); // has two components named provider and consumer
const ContextAPI = () => {
  const [people, setPeople] = useState(data);
  const removeItem = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id);
    });
  };
  return (
    <PersonContext.Provider value={{ removeItem, people }}>
      <h2>ContextAPI</h2>
      <List />
    </PersonContext.Provider>
  );
};

const List = () => {
  const { people } = useContext(PersonContext);
  return (
    <>
      {people.map((person) => {
        return <SinglePerson key={person.id} person={person} />;
      })}
    </>
  );
};

const SinglePerson = ({ person }) => {
  const { removeItem } = useContext(PersonContext);
  return (
    <div key={person.id}>
      <h4>{person.name}</h4>
      <button type='button' onClick={() => removeItem(person.id)}>
        remove
      </button>
    </div>
  );
};

export default ContextAPI;
