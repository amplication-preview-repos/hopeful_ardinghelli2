import * as graphql from "@nestjs/graphql";
import { ChatGroupResolverBase } from "./base/chatGroup.resolver.base";
import { ChatGroup } from "./base/ChatGroup";
import { ChatGroupService } from "./chatGroup.service";

@graphql.Resolver(() => ChatGroup)
export class ChatGroupResolver extends ChatGroupResolverBase {
  constructor(protected readonly service: ChatGroupService) {
    super(service);
  }
}
