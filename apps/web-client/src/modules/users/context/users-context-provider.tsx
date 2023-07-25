import React, { PropsWithChildren, useEffect, useMemo, useState } from "react"

import { User } from "../users.types";
import UsersApiClient from "../api/users-api-client";
import { fromUserDTOToWebUser } from "../utils/parseUser";
import UsersContext from "./users-context"

const UsersContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const usersApiClient = useMemo(() => new UsersApiClient(), []);

  const [isLoading, setIsLoading] = useState(false);
  const [users, setUsers] = useState<User[]>([]);
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    setIsLoading(true);
    const users = await usersApiClient.getUsers();
    setIsLoading(false);
    setUsers(users.map(fromUserDTOToWebUser));
  };

  return <UsersContext.Provider value={{
    users,
    isLoading,
  }}>
    {children}
  </UsersContext.Provider>
}

export default UsersContextProvider
