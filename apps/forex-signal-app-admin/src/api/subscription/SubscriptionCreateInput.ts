import { ChatGroupCreateNestedManyWithoutSubscriptionsInput } from "./ChatGroupCreateNestedManyWithoutSubscriptionsInput";
import { CourseCreateNestedManyWithoutSubscriptionsInput } from "./CourseCreateNestedManyWithoutSubscriptionsInput";
import { SignalCreateNestedManyWithoutSubscriptionsInput } from "./SignalCreateNestedManyWithoutSubscriptionsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type SubscriptionCreateInput = {
  chatGroups?: ChatGroupCreateNestedManyWithoutSubscriptionsInput;
  courses?: CourseCreateNestedManyWithoutSubscriptionsInput;
  name?: string | null;
  signals?: SignalCreateNestedManyWithoutSubscriptionsInput;
  user?: UserWhereUniqueInput | null;
};
