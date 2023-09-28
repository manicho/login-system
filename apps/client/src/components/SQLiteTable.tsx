import { useMyContext } from "../context/MyContext";
import { User } from "../interfaces/User";

export const SQLiteTable = () => {
  const { databaseUsers } = useMyContext();

  return (
    <div>
      <ul>
        {databaseUsers
          ? databaseUsers.map((item: User) => (
              <li key={item.id}>
                {item.first_name} {item.last_name} {item.email}
              </li>
            ))
          : null}
      </ul>
    </div>
  );
};
