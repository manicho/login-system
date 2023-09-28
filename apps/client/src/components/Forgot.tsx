import axios from "axios";
import { SyntheticEvent, useState } from "react";

export const Forgot = () => {
  const [email, setEmail] = useState("");
  const [notify, setNotify] = useState({
    show: false,
    error: false,
    message: "",
  });

  const submit = async (e: SyntheticEvent) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("forgot", { email });

      setNotify({
        show: true,
        error: false,
        message: data.message,
      });
    } catch (error) {
      setNotify({
        show: true,
        error: true,
        message: "Error occurred!",
      });
    }
  };

  let info;

  if (notify.show) {
    info = (
      <div
        className={notify.error ? "alert alert-danger" : "alert alert-success"}
      >
        {notify.message}
      </div>
    );
  }

  return (
    <main className="form-signin w-100 m-auto">
      {info}
      <form onSubmit={submit}>
        <h1 className="h3 mb-3 fw-normal">Please put your email</h1>
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

        <button className="btn btn-lg btn-primary w-100 mt-3" type="submit">
          Submit
        </button>
      </form>
    </main>
  );
};
