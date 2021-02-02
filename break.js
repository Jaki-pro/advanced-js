const nums = [1,2,3,4,5,6];
for(let i=0;i<nums.length;i++){
    if(i<3){
        continue;
    }
    console.log(nums[i]);
}