import axios from "axios";
import { SyntheticEvent, useState } from "react";
import { GoogleLogin } from "@react-oauth/google";
import { Link } from "react-router-dom";

export const LoginForm = (props: {
  loginData: Function;
  success: () => void;
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = async (e: SyntheticEvent) => {
    e.preventDefault();

    const { data } = await axios.post(
      "login",
      {
        email,
        password,
      },
      { withCredentials: true }
    );

    axios.defaults.headers.common["Authorization"] = `Bearer ${data.token}`;

    props.loginData(data);
  };

  const onSuccess = async (googleUser: any) => {
    const { status, data } = await axios.post(
      "google-auth",
      {
        token: googleUser.credential,
      },
      { withCredentials: true }
    );

    axios.defaults.headers.common["Authorization"] = `Bearer ${data.token}`;

    if (status === 200) props.success();
  };

  const onError = () => {
    console.log("error");
  };

  return (
    <>
      <form onSubmit={submit}>
        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
        <div className="form-floating">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>

        <div className="mb-3">
          <Link to="/forgot">Forgot password?</Link>
        </div>

        <button className="btn btn-primary w-100 py-2" type="submit">
          Sign in
        </button>
      </form>
      <GoogleLogin onSuccess={onSuccess} onError={onError} />
    </>
  );
};
