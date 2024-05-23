import dayjs from 'dayjs';

let uae = dayjs(); // GST
let lousiana = uae.subtract('9', 'hour'); // CT, 9 hours behind GST

const {
  $y: orig_year,
  $M: orig_month,
  $D: orig_day,
  $H: orig_hour,
  $m: orig_minute,
  $s: orig_second,
} = uae;

console.log(
  `UAE date is: ${orig_year}/${orig_month}/${orig_day} time is: ${orig_hour}:${orig_minute}:${orig_second}`,
);

const {
  $y: conv_year,
  $M: conv_month,
  $D: conv_day,
  $H: conv_hour,
  $m: conv_minute,
  $s: conv_second,
} = lousiana;

console.log(
  `LA date is: ${conv_year}/${conv_month}/${conv_day} time is: ${conv_hour}:${conv_minute}:${conv_second}`,
);
