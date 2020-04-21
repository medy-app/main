import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Post } from '../model/db';
import { FeedDto } from '@medy/api-interfaces';
import { Page } from '../../common/model/dto';

@Injectable()
export class UserFeedService {
  constructor(@InjectModel('Post') private postModel: Model<Post>) {}

  async getAll(page: number, size: number): Promise<Page<FeedDto>> {
    const posts = await this.postModel
      .find()
      .skip(page * size)
      .limit(size);
    const contents = posts.map(({ _id, title, url, image, created }) => ({
      id: _id,
      title,
      url,
      image,
      created
    }));
    const totalElements = await this.postModel.countDocuments();
    return {
      contents,
      totalElements,
      page,
      size
    };
  }
}
