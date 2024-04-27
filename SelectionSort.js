const selectionSort=(arr)=>{
    for(var i=0; i<arr.length; i++){
        var lowest=i;
        for(var j=i+1; j<arr.length; j++){
            //console.log(i,j);
            if(arr[i]>arr[j]){
                var temp=arr[i];
                arr[i]=arr[j];
                arr[j]=temp;
            }
        }
        console.log(arr,i,j);
    }
}

const arr=[120,11,2,5];

console.log(selectionSort(arr));