import {Module} from "@nestjs/common";
import {MongooseModule} from "@nestjs/mongoose";
import {ConfigModule} from "@nestjs/config";
import {AuthModule} from "../auth/auth.module";
import {PostSchema} from "./feed.schema";
import {AdminFeedService} from "./service/admin-feed.service";
import {FeedController} from "./controller/feed.controller";
import {UserFeedService} from "./service/user-feed.service";

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: "Post", schema: PostSchema}
    ]),
    ConfigModule,
    AuthModule
  ],
  providers: [
    AdminFeedService,
    UserFeedService
  ],
  controllers: [
    FeedController
  ]
})
export class FeedModule {
}
