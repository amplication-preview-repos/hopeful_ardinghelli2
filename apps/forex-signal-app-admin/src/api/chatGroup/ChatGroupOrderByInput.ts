import { SortOrder } from "../../util/SortOrder";

export type ChatGroupOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  subscriptionId?: SortOrder;
  updatedAt?: SortOrder;
};
