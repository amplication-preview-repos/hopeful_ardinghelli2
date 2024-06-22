import { ChatGroupListRelationFilter } from "../chatGroup/ChatGroupListRelationFilter";
import { CourseListRelationFilter } from "../course/CourseListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { SignalListRelationFilter } from "../signal/SignalListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type SubscriptionWhereInput = {
  chatGroups?: ChatGroupListRelationFilter;
  courses?: CourseListRelationFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  signals?: SignalListRelationFilter;
  user?: UserWhereUniqueInput;
};
