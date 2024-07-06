import dayjs from "dayjs";

export const dayFormat = (timestamp: number) => {
  return dayjs(timestamp).format("YYYY/MM/DD").toLocaleString();
};
