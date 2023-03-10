import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import { toast } from "react-toastify";

LoginForm.propTypes = {
  onFormSubmit: PropTypes.func,
};

LoginForm.defaultProps = {
  onFormSubmit: null,
};

function LoginForm({ onFormSubmit }) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;

  const handleOnChange = (e) => {
    e.preventDefault();

    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("Please input mandatory field(s)");
      return;
    }

    if (!onFormSubmit) return;

    onFormSubmit({
      email,
      password,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
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
      <div className="d-grid gap-1">
        <button className="btn btn-primary" type="submit">
          Login
        </button>
      </div>
    </form>
  );
}

export default LoginForm;
