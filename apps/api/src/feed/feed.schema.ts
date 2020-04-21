import {Schema} from "mongoose";

export const PostSchema = new Schema({
  title: String,
  url: String,
  image: String,
  created: Date
});
