import React, { PropsWithChildren } from "react"

import UsersContext from "./users-context"

const UsersContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
  return <UsersContext.Provider value={{}}>
    {children}
  </UsersContext.Provider>
}

export default UsersContextProvider
