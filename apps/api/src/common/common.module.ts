import {Module} from "@nestjs/common";
import {Clock} from "./common/clock";

@Module({
  providers: [
    Clock
  ]
})
export class CommonModule {
}
