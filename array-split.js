const nums = [1,2,3,4,5,6,7,8];
// const part = nums.slice(2,5);
// console.log(part);
// console.log(nums);
const part = nums.slice(0,1);
const removed = nums.splice(3,2);
console.log(removed);
console.log(nums);

console.log(part);