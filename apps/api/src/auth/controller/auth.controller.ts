import {Body, Controller, Post} from "@nestjs/common";
import {AuthService} from "../service/auth.service";
import {LoginDto} from "../model/dto";
import {TokenService} from "../service/token.service";
import {GenericResponse} from "../../common/model/dto";

@Controller("/auth")
export class AuthController {

  constructor(private authService: AuthService,
              private tokenService: TokenService) {
  }

  @Post("/login")
  async login(@Body() login: LoginDto): Promise<GenericResponse<string>> {
    const {username, password} = login;
    const principal = await this.authService.login(username, password);
    const token = this.tokenService.getToken(principal);
    return {
      value: token
    }
  }
}
