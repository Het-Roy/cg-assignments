var arr = [1,2,3,4,10,91,9,88,7];
var evenCount = 0;
var oddCount = 0;
for (i=0; i<arr.length; i++){
    if(arr[i]%2==0){
        evenCount++;
    }
    else{
        oddCount++;
    }
}
console.log("Even : ",evenCount);
console.log("Odd : ",oddCount);
