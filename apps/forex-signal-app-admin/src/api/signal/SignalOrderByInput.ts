import { SortOrder } from "../../util/SortOrder";

export type SignalOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  subscriptionId?: SortOrder;
  typeField?: SortOrder;
  updatedAt?: SortOrder;
};
