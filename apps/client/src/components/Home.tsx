import axios from "axios";
import { useState, useEffect } from "react";
import { useMyContext } from "../context/MyContext";

export const Home = () => {
  const { auth, setAuth } = useMyContext();
  const [message, setMessage] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get("user");

        setMessage(`Hi ${data.first_name} ${data.last_name}`);
        setAuth(true);
      } catch (error) {
        setMessage("You are not authenticated");
        setAuth(false);
      }
    })();
  }, []);

  return (
    <div className="container mt-5 text-center">
      <h3>{auth ? message : "You are not authenticated"}</h3>
    </div>
  );
};
