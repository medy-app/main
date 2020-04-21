import {Document} from "mongoose";

export interface Account extends Document {
  username: string;
  password: string;
  created: string;
}
