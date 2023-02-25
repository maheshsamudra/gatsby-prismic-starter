import React from "react";
import { ErrorMessage, Field, useFormikContext } from "formik";

const StyledFormikInput = ({
  label,
  name,
  type = "text",
  placeholder = " ",
  readOnly = false,
}) => {
  const { errors, touched, status } = useFormikContext();
  const hasError = errors?.[name] && touched?.[name];

  return (
    <div className="form-floating mb-3">
      <Field
        type={type}
        name={name}
        placeholder={placeholder}
        className={`form-control ${hasError ? "is-invalid" : ""}`}
        id={name}
        disabled={status?.success || readOnly}
      />
      <label htmlFor={name}>{label}</label>
      <ErrorMessage
        name={name}
        component="span"
        className={"invalid-feedback"}
      />
    </div>
  );
};

export default StyledFormikInput;
