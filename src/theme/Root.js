// src/theme/Root.js
import React from "react";
import { Provider } from "react-redux";
import store from "../redux/store"; // Import the Redux store

// This component wraps the entire app in the Redux Provider
export default function Root({ children }) {
  return <Provider store={store}>{children}</Provider>;
}
