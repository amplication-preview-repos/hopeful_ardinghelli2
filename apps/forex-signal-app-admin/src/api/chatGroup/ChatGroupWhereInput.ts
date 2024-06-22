import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { SubscriptionWhereUniqueInput } from "../subscription/SubscriptionWhereUniqueInput";

export type ChatGroupWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  subscription?: SubscriptionWhereUniqueInput;
};
