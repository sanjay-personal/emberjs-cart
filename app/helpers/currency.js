import { helper } from '@ember/component/helper';

export default helper(function currency(positional, currencyVal) {
  console.log('val', positional);
  const [val] = positional;
  console.log('val222', val);

  return Number(val).toLocaleString(currencyVal, {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 2,
  });
});
