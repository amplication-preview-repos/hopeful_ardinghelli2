import { SubscriptionWhereUniqueInput } from "../subscription/SubscriptionWhereUniqueInput";

export type SignalCreateInput = {
  subscription?: SubscriptionWhereUniqueInput | null;
  typeField?: "Option1" | null;
};
