import {Document} from "mongoose";

export interface Post extends Document {
  title: string;
  url: string;
  image: string;
  created: string;
}
