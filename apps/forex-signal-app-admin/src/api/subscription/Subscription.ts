import { ChatGroup } from "../chatGroup/ChatGroup";
import { Course } from "../course/Course";
import { Signal } from "../signal/Signal";
import { User } from "../user/User";

export type Subscription = {
  chatGroups?: Array<ChatGroup>;
  courses?: Array<Course>;
  createdAt: Date;
  id: string;
  name: string | null;
  signals?: Array<Signal>;
  updatedAt: Date;
  user?: User | null;
};
