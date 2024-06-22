import { Subscription } from "../subscription/Subscription";

export type Course = {
  content: string | null;
  createdAt: Date;
  id: string;
  subscription?: Subscription | null;
  title: string | null;
  updatedAt: Date;
};
