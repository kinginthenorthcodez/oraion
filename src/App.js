import React from 'react';
//import PropsType from "./1-PropTypes/Proptypes";
import Index from './pages';
import Friends from './1-props/Prop';
import ContextAPI from './1-contextAPI/contextAPI';
import { useSelector, useDispatch } from 'react-redux';
import { increament, decreament, isLogged } from './actions';

// import { reducer } from "./1-useReducer/reducer";

const App = () => {
  const counter = useSelector((state) => state.counts);
  const islogged = useSelector((state) => state.isLoggedIn);
  const dispatch = useDispatch();
  console.log(islogged);
  return (
    <>
      <h2>Hooks </h2>
      <h3>Counter: {counter}</h3>
      {islogged ? (
        <h4 className='logged'>
          LoggedIn <br /> <Index />
        </h4>
      ) : (
        <h4 className='loggedOut'>LoggedOut</h4>
      )}
      ;
      <button type='button' onClick={() => dispatch(increament())}>
        +
      </button>
      <button type='button' onClick={() => dispatch(decreament())}>
        -
      </button>
      <button type='button' onClick={() => dispatch(isLogged())}>
        Login
      </button>
      <h2>Props Example</h2>
      <Friends />
      <ContextAPI />
    </>
  );
};

export default App;
