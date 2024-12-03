import React, { useState } from "react";
import { submitForm } from "../api/forms";

const Form = () => {
  const [name, setName] = useState("");
  const [className, setClassName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = { name, class: className, report_description: description };
    try {
      await submitForm(formData);
      alert("Form submitted successfully!");
      setName("");
      setClassName("");
      setDescription("");
    } catch (error) {
      alert("Failed to submit the form.");
    }
  };

  return (
    <div>
      <h2>Submit a Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Class</label>
          <input
            type="text"
            value={className}
            onChange={(e) => setClassName(e.target.value)}
          />
        </div>
        <div>
          <label>Report Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
