import React, { useState } from "react";
import style from "./SignUp.module.css";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const newUser = {
    name: name,
    email: email,
    contact: contact,
  };

 

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = {};
    if (!name.trim()) {
      validationErrors.name = "username is required !";
    }
    if (!email.trim()) {
      validationErrors.email = "email is required !";
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      validationErrors.email = "email is not valid";
    }
    if (!contact.trim()) {
      validationErrors.contact = "contact no is required !";
    } else if (!/^\d{10}$/.test(contact.replace(/\s|-/g, ''))) {
      validationErrors.contact = "contact number is not valid";
    }

    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      alert("You registered successfully We will contact you soon");

      navigate("/");
    }
    const existingData = JSON.parse(localStorage.getItem("signupData")) || [];
    // Add the new signup data to the existing data array
    const userData = [...existingData, newUser];

    // Save the updated data to local storage
    localStorage.setItem("user", JSON.stringify(userData));
    //  alert("registered successfully")
    setName("");
    setEmail("");
    setContact("");
  };

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <div className={style.main}>
      <h1>Welcome to Zeblearn India's no 1 SAP institute</h1>
      <div className={style.signup}>
        {errors.name && <span className={style.nameError}>{errors.name}</span>}
        <input
          placeholder="Enter your name "
          value={name}
          required
          onChange={(e) => setName(e.target.value)}
        />

        {errors.email && (
          <span className={style.emailError}>{errors.email}</span>
        )}
        <input
          name="email"
          placeholder="Enter your email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />

        {errors.contact && (
          <span className={style.contactError}>{errors.contact}</span>
        )}
        <input
          name="contact"
          type="contact"
          placeholder="Enter your contact number"
          value={contact}
          required
          onChange={(e) => setContact(e.target.value)}
        />

        <div className={style.btn}>
          <button onClick={handleSubmit}>Register here</button>

        </div>
      </div>
    </div>
  );
};

export default SignUp;
