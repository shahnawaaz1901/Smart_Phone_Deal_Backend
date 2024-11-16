import { User, UserParamsOptional } from "../../types/user.types";
import UserModel from "./users.model";

export default class UserRepository {
  async createUser(userData: User) {
    try {
      const newUser = new UserModel(userData);
      await newUser.save();
      return newUser;
    } catch (error: any) {
      throw error;
    }
  }
  async getUser(filter: UserParamsOptional) {
    try {
      const user = await UserModel.findOne(filter);
      return user;
    } catch (error: any) {
      throw error;
    }
  }
}
