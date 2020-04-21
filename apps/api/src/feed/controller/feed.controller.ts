import { Body, Controller, Get, Param, Post, Query, Scope } from '@nestjs/common';
import { AdminFeedService } from '../service/admin-feed.service';
import { CreateFeedDto } from '@medy/api-interfaces';
import { RequestAuthPrincipalService } from '../../auth/service/request-auth-principal.service';
import { UserFeedService } from '../service/user-feed.service';

@Controller({
  path: '/feed',
  scope: Scope.REQUEST
})
export class FeedController {
  constructor(
    private adminFeedService: AdminFeedService,
    private userFeedService: UserFeedService,
    private requestAuthPrincipalService: RequestAuthPrincipalService
  ) {}

  @Get('/USER/all')
  async getFeedUser(@Query('page') page?: number, @Query('size') size?: number): Promise<any> {
    return this.userFeedService.getAll(page || 0, size || 20);
  }

  @Post('/ADMIN')
  async postFeedAdmin(@Body() dto: CreateFeedDto): Promise<any> {
    this.checkAdminAccess();
    const id = await this.adminFeedService.create(dto);
    return { id };
  }

  @Get('/ADMIN/:id')
  async getFeedAdmin(@Param('id') id: string): Promise<any> {
    this.checkAdminAccess();
    return this.adminFeedService.getFeed(id);
  }

  @Post('/ADMIN/:id/delete')
  async postFeedDelete(@Param('id') id: string): Promise<any> {
    this.checkAdminAccess();
    return this.adminFeedService.deleteFeed(id);
  }

  private checkAdminAccess(): void {
    if (!this.requestAuthPrincipalService.isAdmin()) {
      throw { code: 'feed.access-denied' };
    }
  }
}
