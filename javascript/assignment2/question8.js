var arr = [1,2,3,-4,0,0,-9,88,7];
var posCount = 0;
var negCount = 0;
var zeroCount = 0;
for (i=0; i<arr.length; i++){
    if(arr[i]>0){
        posCount++;
    }
    else if(arr[i]<0){
        negCount++;
    }
    else{
        zeroCount++;
    }
}
console.log("Positive : ",posCount);
console.log("Negative : ",negCount);
console.log("Zero : ",zeroCount);
