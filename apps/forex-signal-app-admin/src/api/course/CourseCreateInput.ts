import { SubscriptionWhereUniqueInput } from "../subscription/SubscriptionWhereUniqueInput";

export type CourseCreateInput = {
  content?: string | null;
  subscription?: SubscriptionWhereUniqueInput | null;
  title?: string | null;
};
