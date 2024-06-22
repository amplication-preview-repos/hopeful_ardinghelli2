import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ChatGroupServiceBase } from "./base/chatGroup.service.base";

@Injectable()
export class ChatGroupService extends ChatGroupServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
