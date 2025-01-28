import React, { useState } from "react";
import "../index.css";

const Contact = () => {
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    comments: "",
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [id]: value,
    }));
  };

  const validate = () => {
    const newErrors = {};

    if (!formValues.firstName.trim()) {
      newErrors.firstName = "First name is required.";
    } else if (formValues.firstName.trim().length < 3) {
      newErrors.firstName = "First name must be at least 3 characters long.";
    }

    if (!formValues.lastName.trim()) {
      newErrors.lastName = "Last name is required.";
    } else if (formValues.lastName.trim().length < 3) {
      newErrors.lastName = "Last name must be at least 3 characters long.";
    }
    if (!formValues.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
      newErrors.email = "Email address is invalid.";
    }
    if (!formValues.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^\d{10}$/.test(formValues.phone)) {
      newErrors.phone = "Phone number must be 10 digits.";
    }
    if (!formValues.comments.trim()) {
      newErrors.comments = "Comments are required.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form submitted:", formValues);
      alert("Form submitted successfully!");
      setFormValues({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        comments: "",
      });
      setErrors({});
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1>Contact Us</h1>
        <input
          type="text"
          id="firstName"
          placeholder="First Name"
          value={formValues.firstName}
          onChange={handleInputChange}
        />
        {errors.firstName && <p className="error">{errors.firstName}</p>}

        <input
          type="text"
          id="lastName"
          placeholder="Last Name"
          value={formValues.lastName}
          onChange={handleInputChange}
        />
        {errors.lastName && <p className="error">{errors.lastName}</p>}

        <input
          type="email"
          id="email"
          placeholder="Email"
          value={formValues.email}
          onChange={handleInputChange}
        />
        {errors.email && <p className="error">{errors.email}</p>}

        <input
          type="tel"
          id="phone"
          placeholder="Phone Number"
          value={formValues.phone}
          onChange={handleInputChange}
        />
        {errors.phone && <p className="error">{errors.phone}</p>}

        <h4>Comments..</h4>
        <textarea
          id="comments"
          placeholder="Your comments here..."
          value={formValues.comments}
          onChange={handleInputChange}
        ></textarea>
        {errors.comments && <p className="error">{errors.comments}</p>}

        <button type="submit" id="button">
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;
