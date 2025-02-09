// src/components/MethodEndpoint.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setValue } from "../redux/actions"; // Import the setValue action

const MethodEndpoint = () => {
  // Use useSelector to get 'value' from the Redux store
  const value = useSelector((state) => state.value);

  // Use dispatch to update the value in the Redux store
  const dispatch = useDispatch();

  const handleChangeValue = () => {
    // Dispatch an action to update the value
    dispatch(setValue("new value"));
  };

  return (
    <div>
      <h1>Current Value: {value}</h1>
      <button onClick={handleChangeValue}>Set New Value</button>
    </div>
  );
};

export default MethodEndpoint;
