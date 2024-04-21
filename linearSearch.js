const nums=[1,10,2,7,6,3,8,100]

const LinearSearch=(arr,val)=>{
    for(const i=0; i<arr.length; i++){
        if(arr[i]===val){
            return i;
        }
        return -1;
    }
}

console.log(LinearSearch(nums,10));