import axios from "axios";
import { SyntheticEvent, useState } from "react";
import { GoogleLogin } from "@react-oauth/google";
// import GoogleLogin from "@stack-pulse/next-google-login";
// import { GoogleLogin } from "react-google-login";
import { Link } from "react-router-dom";

export const LoginForm = (props: {
  loginData: Function;
  success: Function;
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

    console.log(googleUser);
    console.log(status);
    console.log("data", data);
  };

  const onError = () => {
    // alert(e.error);
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
      {/* <GoogleLogin
        clientId="123268234259-bmb80j8gigdi48ph8jhag39mictdhn1h.apps.googleusercontent.com"
        buttonText="Login with Google"
        onSuccess={console.log}
        onFailure={console.log}
        cookiePolicy="single_host_origin"
        className="mt-3 w-100"
      /> */}
    </>
  );
};
