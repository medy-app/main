export enum PrincipalType {
  ADMIN = "ADMIN",
  USER = "USER"
}

export interface AuthPrincipal {
  id: string;
  type: PrincipalType;
  username: string;
}

export interface LoginDto {
  username: string;
  password: string;
}

export interface TokenDto {
  principal: AuthPrincipal;
  expiryTime: number;
}
