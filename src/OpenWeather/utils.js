var daysMap = {
  "0":"Воскресенье",
  "1":"Понедельник",
  "2":"Вторник",
  "3":"Среда",
  "4":"Четверг",
  "5":"Пятница",
  "6":"Суббота"
};

var monthsMap = {
  "0":"Январь",
  "1":"Февраль",
  "2":"Март",
  "3":"Апрель",
  "4":"Май",
  "5":"Июнь",
  "6":"Июль",
  "7":"Август",
  "8":"Сентябрь",
  "9":"Октябрь",
  "10":"Ноябрь",
  "11":"Декабрь"
};

function convertTemp (kelvin) {
  return parseFloat(kelvin - 273.15).toFixed(1);
}

function getDate (unixTimestmap) {
  var date = new Date(unixTimestmap * 1000);
  var day = daysMap[date.getDay()]
  var month = monthsMap[date.getMonth()] + ' ' + date.getDate();
  return day + ', ' + month;
}

module.exports = {
  convertTemp: convertTemp,
  getDate: getDate
}
