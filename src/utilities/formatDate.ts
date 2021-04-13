export const formatDate = (dateOBJ: Date): string => {
  const myDate = new Date(dateOBJ);
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  const formattedDate = `${days[myDate.getDay()]}, ${myDate.getDate()} ${
    months[myDate.getMonth()]
  }`;
  return formattedDate;
};
