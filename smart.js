
const arr = [1,2,3,4,5];
// const duplicateArr = [];
// for(i=0;i<arr.length;i++){
//     const num = arr[i]*arr[i];
//     duplicateArr.push(num);
// }
//question be like 
//what does the second parametere of function inside the map means?
//inside the map the second parametere of function means the index number
// function square(element){
    
//     return element*element;
// }
// const anotherArray = arr.map(function(element){
    
//     return element*element;
// });

console.log(arr.map(x=>x*x));
//it's filter time filter
const biggers = arr.filter(x=>x>=2);
console.log(biggers);
const found= arr.find(x=>x>3);
console.log(found);

