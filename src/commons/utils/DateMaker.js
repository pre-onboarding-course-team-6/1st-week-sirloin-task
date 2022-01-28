const now = new Date();
export const todayMaker = new Date();
export const nextWeekMaker = new Date(
  now.setDate(now.getDate() + 7, now.setHours(24, 0, 0, 0))
);
