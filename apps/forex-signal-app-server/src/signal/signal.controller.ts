import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SignalService } from "./signal.service";
import { SignalControllerBase } from "./base/signal.controller.base";

@swagger.ApiTags("signals")
@common.Controller("signals")
export class SignalController extends SignalControllerBase {
  constructor(protected readonly service: SignalService) {
    super(service);
  }
}
