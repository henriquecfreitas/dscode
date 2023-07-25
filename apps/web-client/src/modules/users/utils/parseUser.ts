import { User as UserDTO } from "@dashskin/users-dtos";
import { User } from "../users.types";

export function fromUserDTOToWebUser(
  user: UserDTO
): User {
  const today = new Date();
  const birthdate = new Date(user.birthdate);
  const timeDiff = today.getTime() - birthdate.getTime();
  const aYearInMS = 31557600000;
  
  return {
    name: user.name,
    email: user.email,
    avatar: user.avatar,
    age: Math.floor(timeDiff / aYearInMS),
  }
}
