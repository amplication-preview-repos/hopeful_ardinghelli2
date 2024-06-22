import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ChatGroupService } from "./chatGroup.service";
import { ChatGroupControllerBase } from "./base/chatGroup.controller.base";

@swagger.ApiTags("chatGroups")
@common.Controller("chatGroups")
export class ChatGroupController extends ChatGroupControllerBase {
  constructor(protected readonly service: ChatGroupService) {
    super(service);
  }
}
