import dayjs from "dayjs";

export const dayFormat = (date: Date) => {
  return dayjs(date).format("YYYY/MM/DD").toLocaleString();
};
