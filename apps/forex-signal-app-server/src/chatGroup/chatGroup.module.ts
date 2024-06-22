import { Module } from "@nestjs/common";
import { ChatGroupModuleBase } from "./base/chatGroup.module.base";
import { ChatGroupService } from "./chatGroup.service";
import { ChatGroupController } from "./chatGroup.controller";
import { ChatGroupResolver } from "./chatGroup.resolver";

@Module({
  imports: [ChatGroupModuleBase],
  controllers: [ChatGroupController],
  providers: [ChatGroupService, ChatGroupResolver],
  exports: [ChatGroupService],
})
export class ChatGroupModule {}
