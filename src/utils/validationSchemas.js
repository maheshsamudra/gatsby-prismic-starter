import * as Yup from "yup";

const EMAIL_ERROR = "Please enter a valid email address";

const testSchema = Yup.object().shape({
  email: Yup.string().email(EMAIL_ERROR).required("Required"),
  name: Yup.string().required("Required"),
});

export { testSchema };
