import React, { PropsWithChildren, useEffect, useMemo, useState } from "react"

import { User } from "../users.types";
import UsersApiClient from "../api/users-api-client";
import { fromUserDTOToWebUser, getUserAge } from "../utils/parseUser";
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

  const updateUser = async (id: string, userData: Partial<User>) => {
    setIsLoading(true);
    await usersApiClient.updateUser(id, userData);
    setIsLoading(false);
    setUsers(users.map(user => {
      if (user.id !== id) return user;
      return {
        ...user,
        ...userData,
        age: getUserAge(new Date(userData.birthdate || user.birthdate)),
      };
    }));
  };

  const deleteUser = async (id: string) => {
    setIsLoading(true);
    await usersApiClient.deleteUser(id);
    setIsLoading(false);
    setUsers(users.filter(user => user.id !== id));
  }

  return <UsersContext.Provider value={{
    users,
    isLoading,
    updateUser,
    deleteUser,
  }}>
    {children}
  </UsersContext.Provider>
}

export default UsersContextProvider
