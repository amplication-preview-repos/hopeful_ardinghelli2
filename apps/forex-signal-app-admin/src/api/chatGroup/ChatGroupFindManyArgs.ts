import { ChatGroupWhereInput } from "./ChatGroupWhereInput";
import { ChatGroupOrderByInput } from "./ChatGroupOrderByInput";

export type ChatGroupFindManyArgs = {
  where?: ChatGroupWhereInput;
  orderBy?: Array<ChatGroupOrderByInput>;
  skip?: number;
  take?: number;
};
