const bubbleSort=(arr)=>{
    for(var i=arr.length; i>0; i--){
        for(var j=0; j<i-1; j++){
            if(arr[j]>arr[j+1]){
                //swap
                var temp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;

                console.log(arr,arr[j],arr[j+1]);
            }
        }
    }
    return arr;
}

var arr=[43,54,6,3,1]

console.log(bubbleSort(arr));