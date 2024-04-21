const binarySearch=(arr,val)=>{
    var start=0;
    var end= arr.length-1;
    var middle= Math.floor((start+end)/2);
    
    while(arr[middle] !== val && start <= end){
        console.log(start,middle,end);
        if(val<arr[middle]){
            end=middle-1;
        }else{
            start=middle+1;
        }
        middle= Math.floor((start+end)/2);
    }
    console.log(start,middle,end);
    
    if(arr[middle] == val){
        return middle;
    }else{
        return -1;
    }
}

console.log(binarySearch([2,5,6,9,13,15,28,30],100));