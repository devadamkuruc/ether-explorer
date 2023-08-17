const formatDate = (date: Date): string => {
  const monthNames: string[] = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const day: number = date.getDate();
  const monthIndex: number = date.getMonth();
  return `${monthNames[monthIndex]} ${day}`;
};

export const getLast14Days = (): string[] => {
  const today: Date = new Date();
  const last14Days: string[] = [];

  for (let i: number = 13; i >= 0; i--) {
    const prevDate: Date = new Date(today);
    prevDate.setDate(today.getDate() - i);
    last14Days.push(formatDate(prevDate));
  }

  return last14Days;
};
