const weekDayConfig = [
  "Sonntag",
  "Montag",
  "Dienstag",
  "Mittwoch",
  "Donnerstag",
  "Freitag",
  "Samstag"
];

const weekDayShortConfig = ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"];

const monthConfig = [
  "Januar",
  "Februar",
  "März",
  "April",
  "Mai",
  "Juni",
  "Juli",
  "August",
  "September",
  "Oktober",
  "November",
  "Dezember"
];

const monthShortConfig = ['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez']


export const daysInMonth = (year, month) => {
  return 32 - new Date(year, month, 32).getDate();
};

export const getWeekday = (date = "", isStringResult) => {
  if (!date) return isStringResult ? "" : -1;

  if (typeof date === "number" || typeof date === "string") {
    const weekday = new Date(date).getDay();
    return isStringResult ? weekDayConfig[weekday] : weekday;
  }

  return isStringResult ? "" : -1;
};

export const isSameDay = (d1, d2) => {
  return (
    d1.getFullYear() === d2.getFullYear() &&
    d1.getMonth() === d2.getMonth() &&
    d1.getDate() === d2.getDate()
  );
};

const yymmdd = date => {
  var d = new Date(date),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return `${year}-${month}-${day}`;
};

export const format = (date, formatString) => {
  if (formatString === "yy-mm-dd") return yymmdd(date);

  console.warn("given date format is not found");
  return yymmdd(date);
};

export const getDayAfter = (fromDay, n) => {
  const _fromDay = !fromDay ? new Date : fromDay
  const otherDay = new Date(_fromDay);
  otherDay.setDate(_fromDay.getDate() + n);
  return otherDay;
};

export default {
  daysInMonth,
  getWeekday,
  weekDayShortConfig,
  monthConfig,
  monthShortConfig,
  isSameDay,
  format,
  getDayAfter
};
