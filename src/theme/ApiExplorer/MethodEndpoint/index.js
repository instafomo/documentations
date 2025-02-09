// src/theme/ApiExplorer/MethodEndpoint/index.js
import React from "react";
import { useSelector } from "react-redux"; // Import useSelector from react-redux

const MethodEndpoint = () => {
  // Safely read the 'value' from Redux store with a fallback value
  const value = useSelector((state) => state.value || "default value"); // Set default if undefined

  return (
    <div>
      <h1>API Method Endpoint</h1>
      <p>State Value: {value}</p>
    </div>
  );
};

export default MethodEndpoint;
