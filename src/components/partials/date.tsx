import { parseISO, format } from "date-fns";

export const Date = ({ dateString }: { dateString: string }) => {
  const date = parseISO(dateString);

  return <time>{format(date, "LLLL d, yyyy")}</time>;
};
