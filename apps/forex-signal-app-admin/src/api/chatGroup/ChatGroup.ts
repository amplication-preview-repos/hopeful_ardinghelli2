import { Subscription } from "../subscription/Subscription";

export type ChatGroup = {
  createdAt: Date;
  id: string;
  name: string | null;
  subscription?: Subscription | null;
  updatedAt: Date;
};
