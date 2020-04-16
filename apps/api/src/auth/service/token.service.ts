import {Injectable} from "@nestjs/common";
import {SignatureCommon} from "../common/signature-common";
import {AuthPrincipal, TokenDto} from "../model/dto";
import {ConfigService} from "@nestjs/config";

@Injectable()
export class TokenService {

  constructor(private signatureCommon: SignatureCommon,
              private configService: ConfigService) {
  }

  getToken(principal: AuthPrincipal): string {
    const token: TokenDto = {
      principal,
      expiryTime: this.generateExpiryTime()
    };

    const payloadString = JSON.stringify(token);
    const payloadBase64 = Buffer.from(payloadString).toString("base64");
    const signature = this.signatureCommon.generateSignature(payloadString, this.getSecret());
    return `${payloadBase64}.${signature}`;
  }

  getPrincipal(tokenString: string): AuthPrincipal | null {
    const payloadString = Buffer.from(tokenString.split(".")[0], 'base64').toString('ascii');
    const signature = tokenString.split(".")[0];
    const generatedSignature = this.signatureCommon.generateSignature(payloadString, this.getSecret());
    if (signature !== generatedSignature) {
      return null;
    }
    const token = JSON.parse(payloadString) as TokenDto;
    if (this.isExpired(token)) {
      return null;
    }
    return token.principal;
  }

  private getSecret(): string {
    return this.configService.get<string>("JWT_SECRET");
  }

  private isExpired(tokenDto: TokenDto) {
    return tokenDto.expiryTime < Date.now();
  }

  private generateExpiryTime(): number {
    return Date.now() + this.getTokenLifetime();
  }

  private getTokenLifetime(): number {
    return this.configService.get<number>("TOKEN_LIFETIME");
  }

}
