import React from "react";
import { Button, Spinner } from "react-bootstrap";

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
    <Button
      variant={variant}
      type={type}
      disabled={disabled || progress}
      className={
        "position-relative d-flex justify-content-center align-items-center"
      }
      onClick={onClick}
    >
      <span className={progress ? "opacity-0" : ""}>{children || title}</span>
      {progress && (
        <Spinner
          as="span"
          animation="border"
          size="sm"
          role="status"
          aria-hidden="true"
          className={"position-absolute"}
        />
      )}
    </Button>
  );
};

export default StyledButton;
