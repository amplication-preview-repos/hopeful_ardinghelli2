import { Signal as TSignal } from "../api/signal/Signal";

export const SIGNAL_TITLE_FIELD = "id";

export const SignalTitle = (record: TSignal): string => {
  return record.id?.toString() || String(record.id);
};
