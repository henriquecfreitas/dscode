import { createContext } from "react";
import { User } from "../users.types";

const UsersContext = createContext<{
  users: User[],
  isLoading: boolean,
}>({
  users: [],
  isLoading: false,
});

export default UsersContext;
