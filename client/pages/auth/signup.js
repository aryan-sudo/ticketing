import { useState } from "react";
import Router from "next/router";
import useRequest from "../../hooks/use-request";
const Signup = () => {
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });
  const { doRequest, errors } = useRequest({
    url: "/api/users/signup",
    method: "post",
    body: formState,
    onSuccess: () => Router.push("/")
  });

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    doRequest();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Signup</h1>
      <div className="form-group">
        <label>Email Address</label>
        <input
          name="email"
          type="email"
          value={formState.email}
          className="form-control"
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Password</label>
        <input
          name="password"
          type="password"
          value={formState.password}
          className="form-control"
          onChange={handleChange}
        />
      </div>
      {errors}
      <button className="btn btn-primary">Sign Up</button>
    </form>
  );
};

export default Signup;
