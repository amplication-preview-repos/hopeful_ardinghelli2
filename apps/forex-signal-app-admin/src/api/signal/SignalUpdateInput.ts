import { SubscriptionWhereUniqueInput } from "../subscription/SubscriptionWhereUniqueInput";

export type SignalUpdateInput = {
  subscription?: SubscriptionWhereUniqueInput | null;
  typeField?: "Option1" | null;
};
