import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

// ─── Yup Validation Schema ────────────────────────────────────────────────────
// Yup lets us define all validation rules in one clean schema object.
// Formik will automatically run this schema against field values.
const RegistrationSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, "Username must be at least 3 characters.")
    .max(20, "Username cannot exceed 20 characters.")
    .required("Username is required."),

  email: Yup.string()
    .email("Enter a valid email address.")
    .required("Email is required."),

  password: Yup.string()
    .min(6, "Password must be at least 6 characters.")
    .required("Password is required."),
});

// ─── FormikForm Component ─────────────────────────────────────────────────────
const FormikForm = () => {
  // Mock API submission handler
  const handleSubmit = async (values, { setSubmitting, setStatus, resetForm }) => {
    try {
      // Simulate POST request to a mock API
      const response = await fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Formik registration successful:", data);
        setStatus({ success: `Welcome, ${values.username}! Registration complete.` });
        resetForm(); // Clear fields after success
      } else {
        setStatus({ error: "Registration failed. Please try again." });
      }
    } catch (err) {
      setStatus({ error: "Network error. Please check your connection." });
    } finally {
      setSubmitting(false); // Re-enable the submit button
    }
  };

  return (
    <div className="form-container">
      <h2>Register (Formik + Yup)</h2>

      {/* Formik wraps the entire form and manages state, validation, submission */}
      <Formik
        initialValues={{ username: "", email: "", password: "" }}
        validationSchema={RegistrationSchema}
        onSubmit={handleSubmit}
      >
        {/* Render prop: gives us access to Formik's isSubmitting state and status */}
        {({ isSubmitting, status }) => (
          <Form noValidate>
            {/* Status Messages */}
            {status?.success && <p className="success-msg">{status.success}</p>}
            {status?.error && <p className="error-msg">{status.error}</p>}

            {/* Username Field */}
            <div className="field-group">
              <label htmlFor="username">Username</label>
              {/* Field auto-wires name, value, onChange, onBlur to Formik */}
              <Field
                type="text"
                id="username"
                name="username"
                placeholder="Enter your username"
              />
              {/* ErrorMessage renders the Yup error for this field */}
              <ErrorMessage name="username" component="span" className="error-msg" />
            </div>

            {/* Email Field */}
            <div className="field-group">
              <label htmlFor="email">Email</label>
              <Field
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
              />
              <ErrorMessage name="email" component="span" className="error-msg" />
            </div>

            {/* Password Field */}
            <div className="field-group">
              <label htmlFor="password">Password</label>
              <Field
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password (min 6 chars)"
              />
              <ErrorMessage name="password" component="span" className="error-msg" />
            </div>

            {/* isSubmitting disables the button during API call */}
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Registering..." : "Register"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormikForm;
// getgg