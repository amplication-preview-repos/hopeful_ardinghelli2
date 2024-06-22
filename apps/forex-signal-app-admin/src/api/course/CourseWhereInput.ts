import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { SubscriptionWhereUniqueInput } from "../subscription/SubscriptionWhereUniqueInput";

export type CourseWhereInput = {
  content?: StringNullableFilter;
  id?: StringFilter;
  subscription?: SubscriptionWhereUniqueInput;
  title?: StringNullableFilter;
};
