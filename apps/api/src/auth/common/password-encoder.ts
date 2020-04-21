import {compare, hash} from "bcrypt";
import {Injectable} from "@nestjs/common";

@Injectable()
export class PasswordEncoder {
  encode(password: string): Promise<string> {
    return hash(password, 10);
  }

  matches(rawPassword: string, encodedPassword: string): Promise<boolean> {
    return compare(rawPassword, encodedPassword);
  }
}
