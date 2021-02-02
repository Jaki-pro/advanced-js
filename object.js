const student = [
    {id: 21, name: "Omar Sunny",},
    {id: 31, name: "Maannaaaaa",},
    {id: 41, name: "Moyuri",},
    {id: 71, name: "Dipjol",}
];
// const anotherList = [];
// for(i=0;i<student.length;i++){
//     const name = student[i].name;
//     anotherList.push(name);
// }
const names = student.filter(s => s.id>50);

const anotherList = student.find(s => s.id>40);
console.log(student);
console.log(names);
console.log(anotherList);