export function generateDateOptions() {
  const generateBirthdayYear = function() {
    const thisYear = new Date().getFullYear();
    let i = thisYear - 100;
    const options = [];
    for (i; i <= thisYear; i++) {
      options.push({
        name: i + "年",
        value: i
      });
    }
    return options;
  };
  
  const birthdayMonth = [];
  for (let i = 1; i <= 12; i++) {
    birthdayMonth.push({
      name: i + "月",
      value: i
    });
  }
  
  const birthdayDay = [];
  for (let i = 1; i <= 31; i++) {
    birthdayDay.push({
      name: i + "日",
      value: i
    });
  }

  const result = new Object();
  result.years = generateBirthdayYear();
  result.months = birthdayMonth;
  result.days = birthdayDay;

  return result;
}