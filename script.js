import dayjs from 'dayjs';

let dateFormat = 'dddd, DD/MMM/YYYY';
let timeFormat = 'hh:mm A';

// TODO: dayjs() takes the local time, it's not always GST
let uae = dayjs(); // GST
let lousiana = uae.subtract('9', 'hour'); // CT, 9 hours behind GST (doesn't account for daylight savings)

console.log(`UAE Date: ${uae.format(dateFormat)}`);
console.log(`UAE Time: ${uae.format(timeFormat)}`);

console.log(`Lousiana Date: ${lousiana.format(dateFormat)}`);
console.log(`Lousiana Time: ${lousiana.format(timeFormat)}`);
