import React from "react";
import { Alert } from "react-bootstrap";

const StyledFormikMessage = ({ status = {} }) => {
  const { type, message } = status;
  if (!type || !message) return null;
  return (
    <div className="my-3">
      <Alert variant={type}>{message}</Alert>
    </div>
  );
};

export default StyledFormikMessage;
