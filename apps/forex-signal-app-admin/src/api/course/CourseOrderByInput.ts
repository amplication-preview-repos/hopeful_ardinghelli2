import { SortOrder } from "../../util/SortOrder";

export type CourseOrderByInput = {
  content?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  subscriptionId?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
