function pad(num: number) {
  return num.toString().padStart(2, '0');
}

export const formatDateTime = (date: Date) => {
  const offsetMinutes = date.getTimezoneOffset();
  const offsetHours = Math.floor(offsetMinutes / 60);
  const offsetMinutesRemainder = offsetMinutes % 60;
  const sign = offsetHours < 0 ? '+' : '-';

  const isoString = `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(
    date.getDate()
  )}T${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(
    date.getSeconds()
  )}${sign}${pad(Math.abs(offsetHours))}:${pad(offsetMinutesRemainder)}`;

  return isoString;
};
