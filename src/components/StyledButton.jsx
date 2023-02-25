import React from "react";
import { Button } from "react-bootstrap";

const StyledButton = ({
  title = "",
  type = "submit",
  variant = "primary",
  disabled = false,
  progress = false,
  onClick = () => null,
  children = null,
}) => {
  return (
    <Button variant={variant} type={type} disabled={disabled || progress}>
      {children || title}
    </Button>
  );
};

export default StyledButton;
