/**
 * 格式化时间
 * v 需要格式化的时间
 * i 返回格式
 * currentTime 当前时间
 */

const format = (v, i, currentTime) => {
  if (currentTime) {
    v = new Date().getTime()
  } else {
    if (Number(v) === 0 || v === '' || v === null || v === undefined) {
      return '---';
    } else if (/^(-)?\d{1,10}$/.test(v)) {
      v = v * 1000;
    } else if (/^(-)?\d{1,13}$/.test(v)) {
      v = v * 1;
    }
  }

  let dateObj = new Date(v);
  let month = dateObj.getMonth() + 1;
  let date = dateObj.getDate();
  //   let day = dateObj.getDay();
  let hours = dateObj.getHours();
  let minutes = dateObj.getMinutes();
  let seconds = dateObj.getSeconds();
  if (month < 10) {
    month = '0' + month;
  }
  if (date < 10) {
    date = '0' + date;
  }
  if (hours < 10) {
    hours = '0' + hours;
  }
  if (minutes < 10) {
    minutes = '0' + minutes;
  }
  if (seconds < 10) {
    seconds = '0' + seconds;
  }
  //   let days = ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日']
  //   let UnixTimeToDate = dateObj.getFullYear() + '-' + month + '-' + date + ' ' + hours + ':' + minutes + ':' + seconds + '  ' + days[day - 1];
  let UnixTimeToDate = dateObj.getFullYear() + '/' + month + '/' + date + '/' + hours + '/' + minutes + '/' + seconds;
  let UnixTimeToDate1 = dateObj.getFullYear() + '/' + month + '/' + date;
  let UnixTimeToDate2 = hours + ':' + minutes + ':' + seconds;
  let UnixTimeToDate3 = dateObj.getFullYear() + '/' + month + '/' + date + '-' + hours + ':' + minutes + ':' + seconds;
  let UnixTimeToDate4 = dateObj.getFullYear() + '-' + month + '-' + date;
  let UnixTimeToDate5 = dateObj.getFullYear();
  let UnixTimeToDate6 = month;
  let UnixTimeToDate7 = date;
  let UnixTimeToDate8 = hours + ':' + minutes;
  let UnixTimeToDate9 = dateObj.getFullYear() + '-' + month + '-' + date + ' 23:59:59';
  let UnixTimeToDate10 = dateObj.getFullYear() + '-' + month + '-' + date + ' ' + hours + ':' + minutes + ':' + seconds;
  let UnixTimeToDate11 = dateObj.getFullYear() + '-' + month + '-' + date + ' ' + hours + ':' + minutes + ':' + (seconds + 1);
  let UnixTimeToDate12 = month + '月' + date + '日';
  let UnixTimeToDate13 = dateObj.getFullYear() + '-' + month + '-' + date + ' ' + hours + ':' + minutes;

  if (i) {
    return eval('UnixTimeToDate' + i);
  }
  return UnixTimeToDate;
};

export default {
  format
};