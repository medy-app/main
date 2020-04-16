import {Model} from "mongoose";
import {Injectable} from "@nestjs/common";
import {AuthPrincipal, PrincipalType} from "../model/dto";
import {InjectModel} from "@nestjs/mongoose";
import {PasswordEncoder} from "../common/password-encoder";
import {Account} from "../model/db";

@Injectable()
export class AuthService {

  constructor(@InjectModel('Account') private accountModel: Model<Account>,
              private passwordEncoder: PasswordEncoder) {
  }

  async login(username: string, password: string): Promise<AuthPrincipal> {
    const user = await this.accountModel.findOne({username: username}).exec();
    if (user === null) {
      throw {code: "auth.login.invalid-password"}
    }
    const passwordMatches = await this.passwordEncoder.matches(password, user.password);
    if (!passwordMatches) {
      throw {code: "auth.login.invalid-password"}
    }
    const {_id} = user;
    return {
      type: PrincipalType.ADMIN,
      id: _id,
      username
    }
  }
}
