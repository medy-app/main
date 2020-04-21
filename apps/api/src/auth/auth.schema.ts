import {Schema} from "mongoose";

export const AccountSchema = new Schema({
  username: String,
  password: String,
  created: Date
});
