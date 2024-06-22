import { ChatGroup as TChatGroup } from "../api/chatGroup/ChatGroup";

export const CHATGROUP_TITLE_FIELD = "name";

export const ChatGroupTitle = (record: TChatGroup): string => {
  return record.name?.toString() || String(record.id);
};
