// falsy
//false
//null
// 0
//undefined
//NaN

//truthy
//"0",number," ", [],{}

const age = "";
if(age || age==0){
    console.log("condition is true");
}
else{
    console.log("condition is not true");
}