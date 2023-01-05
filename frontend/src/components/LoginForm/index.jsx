import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import { toast } from "react-toastify";

RegisterForm.propTypes = {
  onFormSubmit: PropTypes.func,
};

RegisterForm.defaultProps = {
  onFormSubmit: null,
};

function RegisterForm({ onFormSubmit }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    retypePassword: "",
  });
  const { name, email, password, retypePassword } = formData;

  const handleOnChange = (e) => {
    e.preventDefault();

    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !password || !retypePassword) {
      toast.error("Please input mandatory field(s)");
      return;
    }
    if (password !== retypePassword) {
      toast.error("Retype password should same password");
      return;
    }

    if (!onFormSubmit) return;

    onFormSubmit({
      name,
      email,
      password,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label">Fullname</label>
        <input
          className="form-control"
          name="name"
          value={name}
          onChange={handleOnChange}
        ></input>
      </div>
      <div className="mb-3">
        <label className="form-label">Email</label>
        <input
          type="email"
          className="form-control"
          name="email"
          value={email}
          onChange={handleOnChange}
        ></input>
      </div>
      <div className="mb-3">
        <label className="form-label">Password</label>
        <input
          type="password"
          className="form-control"
          name="password"
          value={password}
          onChange={handleOnChange}
        ></input>
      </div>
      <div className="mb-3">
        <label className="form-label">Retype Password</label>
        <input
          type="password"
          className="form-control"
          name="retypePassword"
          value={retypePassword}
          onChange={handleOnChange}
        ></input>
      </div>
      <div className="d-grid gap-1">
        <button className="btn btn-primary" type="submit">
          Register
        </button>
      </div>
    </form>
  );
}

export default RegisterForm;
