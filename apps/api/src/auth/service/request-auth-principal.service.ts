import {Inject, Injectable, Scope} from "@nestjs/common";
import {TokenService} from "./token.service";
import {AuthPrincipal, PrincipalType} from "../model/dto";
import {Request} from "express";
import {REQUEST} from "@nestjs/core";

@Injectable({scope: Scope.REQUEST})
export class RequestAuthPrincipalService {

  constructor(private tokenService: TokenService,
              @Inject(REQUEST) private request: Request) {
  }

  getPrincipal(): AuthPrincipal | null {
    const authorizationHeader = this.request.header("Authorization");
    if (!authorizationHeader) {
      return null;
    }
    const token = authorizationHeader.substr("Bearer ".length);
    return this.tokenService.getPrincipal(token);
  }

  isAdmin(): boolean {
    const principal = this.getPrincipal();
    return !!principal && principal.type === PrincipalType.ADMIN;
  }

}
