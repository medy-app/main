import {Module} from "@nestjs/common";
import {AuthController} from "./controller/auth.controller";
import {AuthService} from "./service/auth.service";
import {TokenService} from "./service/token.service";
import {PasswordEncoder} from "./common/password-encoder";
import {MongooseModule} from "@nestjs/mongoose";
import {AccountSchema} from "./auth.schema";
import {SignatureCommon} from "./common/signature-common";
import {ConfigModule} from "@nestjs/config";
import {RequestAuthPrincipalService} from "./service/request-auth-principal.service";

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: 'Account', schema: AccountSchema}
    ]),
    ConfigModule
  ],
  providers: [
    RequestAuthPrincipalService,
    PasswordEncoder,
    AuthService,
    TokenService,
    SignatureCommon
  ],
  controllers: [
    AuthController
  ],
  exports: [
    RequestAuthPrincipalService
  ]
})
export class AuthModule {
}
