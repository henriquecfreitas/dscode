import { GetUsersResponse } from "@dscode/users-dtos";
import { User } from "../users.types";

class UsersApiClient {
  private baseURL: string;
  private readonly usersApiUrl = "/users";

  constructor() {
    this.baseURL = "http://localhost:3000/api" + this.usersApiUrl;
  }

  public async getUsers(): Promise<GetUsersResponse> {
    const getUsersPath = "";
    const getUsersURL = this.baseURL + getUsersPath;
    return new Promise((resolve, reject) => {
      fetch(getUsersURL).then(response => {
        return response.json();
      }, reject).then(resolve);
    });
  }

  public async updateUser(id: string, user: Partial<User>): Promise<void> {
    const updateUserPath = `/${id}`;
    const updateUserURL = this.baseURL + updateUserPath;
    return new Promise((resolve, reject) => {
      fetch(updateUserURL, {
        method: "PATCH",
        body: JSON.stringify(user),
        headers: {
          "Content-Type": "application/json",
        },
      }).then(() => { resolve() }, reject);
    });
  }

  public async deleteUser(id: string): Promise<void> {
    const deleteUserPath = `/${id}`;
    const deleteUserURL = this.baseURL + deleteUserPath;
    return new Promise((resolve, reject) => {
      fetch(deleteUserURL, {
        method: "DELETE",
      }).then(() => { resolve() }, reject);
    });
  }
}

export default UsersApiClient;
