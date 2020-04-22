import {Module} from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';
import {ConfigModule} from '@nestjs/config';
import {AuthModule} from './auth/auth.module';
import {FeedModule} from './feed/feed.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    AuthModule,
    FeedModule,
    MongooseModule.forRoot(process.env['MONGO_PATH'] || 'mongodb://localhost:27017/medy'),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
}
