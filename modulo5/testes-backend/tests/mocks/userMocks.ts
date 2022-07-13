import { User, USER_ROLES } from "../../src/model/User";

export const newUser = new User(
  "id-mokado",
  "teste1",
  "teste1@gmail.com",
  USER_ROLES.ADMIN
);

export const newUser2 = new User(
  "id-mokado2",
  "teste2",
  "teste2@gmail.com",
  USER_ROLES.NORMAL
);