import { ChatGroupUpdateManyWithoutSubscriptionsInput } from "./ChatGroupUpdateManyWithoutSubscriptionsInput";
import { CourseUpdateManyWithoutSubscriptionsInput } from "./CourseUpdateManyWithoutSubscriptionsInput";
import { SignalUpdateManyWithoutSubscriptionsInput } from "./SignalUpdateManyWithoutSubscriptionsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type SubscriptionUpdateInput = {
  chatGroups?: ChatGroupUpdateManyWithoutSubscriptionsInput;
  courses?: CourseUpdateManyWithoutSubscriptionsInput;
  name?: string | null;
  signals?: SignalUpdateManyWithoutSubscriptionsInput;
  user?: UserWhereUniqueInput | null;
};
