import { SubscriptionWhereUniqueInput } from "../subscription/SubscriptionWhereUniqueInput";

export type ChatGroupUpdateInput = {
  name?: string | null;
  subscription?: SubscriptionWhereUniqueInput | null;
};
