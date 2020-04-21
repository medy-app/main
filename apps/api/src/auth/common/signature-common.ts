import {createHmac} from "crypto";

export class SignatureCommon {
  generateSignature(data: string, secret: string): string {
    return createHmac("SHA256", secret).update(data).digest("base64");
  }
}
