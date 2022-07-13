import { UserDatabase } from "../data/UserDatabase";
import { CustomError } from "../errors/CustomError";

export class UserBusiness {
  constructor(private userDate: UserDatabase) {}
  async getProfile(id: string): Promise<void> {
    try {
      if (!id) {
        throw new CustomError(422, "Empety value");
      }
      const idProfile = this.userDate.getUserById(id);
      if (!idProfile) {
        throw new CustomError(401, "invalid credential");
      }
    } catch (error) {
      if (error instanceof CustomError) {
        throw new CustomError(error.statusCode, error.message);
      }
    }
  }
}