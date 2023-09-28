import { SQLiteTable } from "./SQLiteTable";
import { useMyContext } from "../context/MyContext";
import { useEffect } from "react";
import axios from "axios";

export const RealTimeBar = () => {
  const { auth, emailPayload, setDatabaseUsers } = useMyContext();

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get("all-users");

        setDatabaseUsers(data);
      } catch (error) {
        return null;
      }
    })();
  }, [setDatabaseUsers]);

  return (
    <div className="d-flex justify-content-between">
      <div>
        Displaying Real Time Database
        {auth ? <SQLiteTable /> : null}
      </div>
      <div>
        Displaying Real Time Mail Payload
        <div>{JSON.stringify(emailPayload)}</div>
      </div>
    </div>
  );
};
