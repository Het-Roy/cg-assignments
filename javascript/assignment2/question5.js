var arr = [1,2,3,4,5];
var min = arr[0];

for(i=0; i<arr.length; i++){
    if(min>arr[i]){
        min=arr[i];
    }
}
console.log(min);
