import { SubscriptionWhereUniqueInput } from "../subscription/SubscriptionWhereUniqueInput";

export type ChatGroupCreateInput = {
  name?: string | null;
  subscription?: SubscriptionWhereUniqueInput | null;
};
