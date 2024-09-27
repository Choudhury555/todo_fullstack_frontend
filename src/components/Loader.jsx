import React from "react";

const Loader = () => {
  const loaderStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#f0f0f0",
  };

  const spinnerStyle = {
    width: "50px",
    height: "50px",
    border: "6px solid #f3f3f3",
    borderTop: "6px solid #3498db",
    borderRadius: "50%",
    animation: "spin 1s linear infinite",
  };

  const textStyle = {
    fontSize: "1.5rem",
    fontWeight: "600",
    color: "#3498db",
    marginTop: "1rem",
  };

  return (
    <div style={loaderStyle}>
      <div style={spinnerStyle}></div>
      <p style={textStyle}>Loading...</p>
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  );
};

export default Loader;
