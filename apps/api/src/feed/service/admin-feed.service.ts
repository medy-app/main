import {Injectable} from "@nestjs/common";
import {InjectModel} from "@nestjs/mongoose";
import {Post} from "../model/db";
import {Model} from "mongoose";
import {CreateFeedDto, FeedDto} from "../model/dto";
import Moment from "moment";

@Injectable()
export class AdminFeedService {

  constructor(@InjectModel("Post") private postModel: Model<Post>) {
  }

  async create(dto: CreateFeedDto) {
    const post = await new this.postModel({
      ...dto,
      created: Moment().toISOString()
    }).save();
    return post._id;
  }

  async getFeed(id: string): Promise<FeedDto> {
    const model = await this.postModel.findOne({id});
    if (model === null) {
      throw {code: "feed.admin.not-found"}
    }
    const {_id, title, url, image, created} = model;
    return {
      id: _id,
      title,
      url,
      image,
      created
    }
  }

  async deleteFeed(id: string): Promise<boolean> {
    await this.postModel.deleteOne({id});
    return true;
  }

}
