export const formatSessionData = (sessions) => {
  return sessions
    .reduce((accumulator, currentValue) => {
      const timeExists = accumulator.find(section => section.title === currentValue.startTime);
      timeExists
        ? timeExists.data.push(currentValue)
        : accumulator.push({ title: currentValue.startTime, data: [currentValue] });
      return accumulator;
    }, [])
    .sort((a, b) => a.title - b.title);
};

export const formatAMPM = (date) => {
  var dateObject = new Date(date);
  var hours = dateObject.getHours();
  var minutes = dateObject.getMinutes();
  var ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0' + minutes : minutes;
  var strTime = hours + ':' + minutes + ' ' + ampm;
  return strTime;
}