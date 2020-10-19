import React from "react";

const Notification = ({ color, message }) => {
  return (
    <p style={{ padding: 10, backgroundColor: "#ccc", border: `2px solid ${color}`, color }}>
      {message}
    </p>
  );
};

export default Notification;
