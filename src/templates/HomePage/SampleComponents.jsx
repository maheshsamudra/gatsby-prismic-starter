import React from "react";
import StyledComponent from "../../components/StyledComponent";
import { Col, FloatingLabel, Row, Form, Alert } from "react-bootstrap";
import { Field, Formik } from "formik";
import StyledFormikInput from "../../components/StyledFormikInput";
import { testSchema } from "../../utils/validationSchemas";
import StyledButton from "../../components/StyledButton";

const SampleComponents = () => {
  return (
    <StyledComponent>
      <Row className={"mt-5"}>
        <Col>
          <h1>Heading 1</h1>
          <p>{text}</p>
        </Col>
        <Col>
          <h2>Heading 2</h2>
          <hr />
          <h3>Heading 3</h3>
          <hr />
          <h4>Heading 4</h4>
          <hr />
          <h5>Heading 5</h5>
          <hr />
          <h6>Heading 6 </h6>
        </Col>
      </Row>
      <Row className={"mt-5"}>
        <Col>
          <ul>
            <li>Unordered list item 1</li>
            <li>Unordered list item 2</li>
            <li>Unordered list item 3</li>
            <li>Unordered list item 4</li>
          </ul>
        </Col>
        <Col>
          <ol>
            <li>Unordered list item 1</li>
            <li>Unordered list item 2</li>
            <li>Unordered list item 3</li>
            <li>Unordered list item 4</li>
          </ol>
        </Col>
      </Row>

      <Row className={"mt-5"}>
        <Col>
          <Formik
            initialValues={{
              name: "",
              email: "",
            }}
            validationSchema={testSchema}
            onSubmit={async (values) => {
              await new Promise((r) => setTimeout(r, 500));
              alert(JSON.stringify(values, null, 2));
            }}
          >
            {({ handleSubmit, isSubmitting, status, dirty }) => {
              return (
                <Form onSubmit={handleSubmit}>
                  <StyledFormikInput
                    name={"name"}
                    type={"text"}
                    label={"Name"}
                  />
                  <StyledFormikInput
                    name={"email"}
                    type={"text"}
                    label={"Email"}
                  />
                  <StyledButton title={"Submit"} progress={isSubmitting} />
                </Form>
              );
            }}
          </Formik>
        </Col>
        <Col>
          {[
            "primary",
            "secondary",
            "success",
            "danger",
            "warning",
            "info",
            "light",
            "dark",
          ].map((variant) => (
            <Alert key={variant} variant={variant}>
              This is a {variant} alert—check it out!
            </Alert>
          ))}
        </Col>
      </Row>
      <div className="py-5" />
    </StyledComponent>
  );
};

export default SampleComponents;

const text = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`;
