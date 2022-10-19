import React, { useState } from 'react';
import data from '../birthday/Data';

const PropDrill = () => {
  const [people, setPeople] = useState(data);
  const removeItem = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id);
    });
  };

  return (
    <>
      <h2>PropDrilling</h2>
      <List people={people} removeItem={removeItem} />
    </>
  );
};

const List = ({ people, removeItem }) => {
  return (
    <>
      {people.map((person) => {
        return (
          <SinglePerson
            key={person.id}
            person={person}
            removeItem={removeItem}
          />
        );
      })}
    </>
  );
};

const SinglePerson = ({ person, removeItem }) => {
  return (
    <div key={person.id}>
      <h4>{person.name}</h4>
      <button type='button' onClick={() => removeItem(person.id)}>
        remove
      </button>
    </div>
  );
};
export default PropDrill;
