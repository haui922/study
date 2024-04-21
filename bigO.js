function printAllPairs(n){
    for(var i=1; i<n+1; i++){
        for(var j=1; j<n+1; j++){
            console.log(i,j);
        }
    }
    console.log("bye!")
}

console.log(printAllPairs(4))