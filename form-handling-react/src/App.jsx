import RegistrationForm from "./components/RegistrationForm";
import FormikForm from "../components/formikForm";
import "./App.css";

function App() {
  return (
    <div className="app">
      <h1>React Form Handling</h1>
      <p className="subtitle">
        Two approaches: manual controlled components vs. Formik + Yup
      </p>

      <div className="forms-wrapper">
        {/* Approach 1: Manual controlled component with useState */}
        <RegistrationForm />

        <div className="divider" />

        {/* Approach 2: Formik with Yup schema validation */}
        <FormikForm />
      </div>
    </div>
  );
}

export default App;