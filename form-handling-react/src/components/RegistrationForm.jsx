import { useState } from "react";

const RegistrationForm = () => {
  // Step 1: Initialize state for each form field and errors
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  // Step 2: Handle input changes — this makes every field a "controlled" input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear the error for the field being edited
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  // Step 3: Basic validation — check no fields are empty
  const validate = () => {
    const newErrors = {};

    if (!formData.username.trim()) {
      newErrors.username = "Username is required.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address.";
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required.";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
    }

    return newErrors;
  };

  // Step 4: Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMessage("");

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      // Mock API call — simulating a POST request to a registration endpoint
      const response = await fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Registration successful:", data);
        setSuccessMessage("Registration successful! Welcome, " + formData.username + "!");
        // Reset form after successful submission
        setFormData({ username: "", email: "", password: "" });
      } else {
        setErrors({ api: "Registration failed. Please try again." });
      }
    } catch (error) {
      setErrors({ api: "Network error. Please check your connection." });
    }
  };

  return (
    <div className="form-container">
      <h2>Register (Controlled Component)</h2>

      {successMessage && <p className="success-msg">{successMessage}</p>}
      {errors.api && <p className="error-msg">{errors.api}</p>}

      <form onSubmit={handleSubmit} noValidate>
        {/* Username Field */}
        <div className="field-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}         // controlled: value comes from state
            onChange={handleChange}            // updates state on every keystroke
            placeholder="Enter your username"
          />
          {errors.username && <span className="error-msg">{errors.username}</span>}
        </div>

        {/* Email Field */}
        <div className="field-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
          {errors.email && <span className="error-msg">{errors.email}</span>}
        </div>

        {/* Password Field */}
        <div className="field-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password (min 6 chars)"
          />
          {errors.password && <span className="error-msg">{errors.password}</span>}
        </div>

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
// hgtyfg