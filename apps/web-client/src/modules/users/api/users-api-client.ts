import { GetUsersResponse } from "@dscode/users-dtos";

class UsersApiClient {
  private baseURL: string;
  private readonly usersApiUrl = "/users";

  constructor() {
    this.baseURL = "http://localhost:3000/api" + this.usersApiUrl;
  }

  public async getUsers(): Promise<GetUsersResponse> {
    const getUsersPath = "";
    return new Promise(resolve => {
      fetch(this.baseURL + getUsersPath).then(response => {
        return response.json();
      }).then(resolve);
    });
  }
}

export default UsersApiClient;
