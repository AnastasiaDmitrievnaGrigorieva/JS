function highAndLow(numbers){

const arr = numbers.split(' ');
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  let result = max + " " + min;
return result;

}
