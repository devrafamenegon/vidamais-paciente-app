import { format, parse } from 'date-fns';

export default function getDayOfWeek(date: string): string {
  const parsedDate = parse(date, 'dd/MM/yyyy', new Date());
  const dayOfWeek = format(parsedDate, 'EEEE');

  return dayOfWeek; // Output: Wednesday
}
