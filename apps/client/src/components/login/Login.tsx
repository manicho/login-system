import { useState } from "react";
import { Navigate } from "react-router-dom";
import { LoginForm } from "./LoginForm";
import { AuthenticatorForm } from "./AuthenticatorForm";
import { useMyContext } from "../../context/MyContext";

export const Login = () => {
  const { setAuth } = useMyContext();
  const [redirect, setRedirect] = useState(false);
  const [loginData, setLoginData] = useState<{
    id: number;
    secret?: string;
    otpauth_url?: string;
  }>({
    id: 0,
  });

  const success = () => {
    setRedirect(true);
    setAuth(true);
  };

  if (redirect) {
    return <Navigate to="/" />;
  }

  let form;

  if (loginData?.id === 0) {
    form = <LoginForm loginData={setLoginData} success={success} />;
  } else {
    form = <AuthenticatorForm loginData={loginData} success={success} />;
  }

  return <main className="form-signin w-100 m-auto">{form}</main>;
};
