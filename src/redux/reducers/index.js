// src/redux/reducers/index.js
const initialState = {
  value: "", // Initialize 'value' to an empty string (or any default value)
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_VALUE":
      return { ...state, value: action.payload };
    default:
      return state;
  }
};

export default rootReducer;
