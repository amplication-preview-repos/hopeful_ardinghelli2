import { SubscriptionWhereUniqueInput } from "../subscription/SubscriptionWhereUniqueInput";

export type CourseUpdateInput = {
  content?: string | null;
  subscription?: SubscriptionWhereUniqueInput | null;
  title?: string | null;
};
