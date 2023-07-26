import { User as UserDTO } from "@dscode/users-dtos";
import { User } from "../users.types";

export function getUserAge(birthdate: Date) {
  const today = new Date();
  const timeDiff = today.getTime() - birthdate.getTime();
  const aYearInMS = 31557600000;
  
  return Math.floor(timeDiff / aYearInMS)
}

export function fromUserDTOToWebUser(
  user: UserDTO
): User {
  const birthdate = new Date(user.birthdate);

  return {
    id: user.id,
    name: user.name,
    email: user.email,
    avatar: user.avatar,
    birthdate: birthdate.toISOString().split('T')[0],
    age: getUserAge(birthdate),
  }
}
