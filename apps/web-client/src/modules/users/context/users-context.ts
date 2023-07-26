import { createContext } from "react";
import { User } from "../users.types";

const UsersContext = createContext<{
  users: User[],
  isLoading: boolean,
  updateUser: (id: string, userData: Partial<User>) => Promise<void>,
  deleteUser: (id: string) => Promise<void>,
}>({
  users: [],
  isLoading: false,
  updateUser: async () => {},
  deleteUser: async () => {},
});

export default UsersContext;
