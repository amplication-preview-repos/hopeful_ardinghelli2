import { Subscription } from "../subscription/Subscription";

export type Signal = {
  createdAt: Date;
  id: string;
  subscription?: Subscription | null;
  typeField?: "Option1" | null;
  updatedAt: Date;
};
