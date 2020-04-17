import Moment from "moment";
import {Injectable} from "@nestjs/common";

@Injectable()
export class Clock {
  moment() {
    return Moment();
  }

  timestamp() {
    return Moment().unix();
  }
}
