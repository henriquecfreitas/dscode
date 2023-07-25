export type User = {
  id: string,
  name: string,
  email: string,
  birthdate: Date,
  avatar: string,
}

export type GetUsersResponse = User[]

export type UpdateUserRequest = Partial<{
  name: string,
  email: string,
  birthdate: Date,
  avatar: string,
}>
