import { helper } from '@ember/component/helper';

export default helper(function multiplication(positional/*, named*/) {
 const [...val] = positional
  console.log("muliply",val)
  return val.reduce((acc,curr)=>acc*curr,1);
});
