import { StringFilter } from "../../util/StringFilter";
import { SubscriptionWhereUniqueInput } from "../subscription/SubscriptionWhereUniqueInput";

export type SignalWhereInput = {
  id?: StringFilter;
  subscription?: SubscriptionWhereUniqueInput;
  typeField?: "Option1";
};
