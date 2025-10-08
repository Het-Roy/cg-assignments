//Declare an array of numbers and a separate variable limit. Write a program to print all numbers from the array that are greater than the limit value using a loop.

var arr = [1,21,33,45,65,77,86,69,82,32,100];
var limit = 50;

for(i=0; i<arr.length; i++){
    if(arr[i]>limit){
        console.log(arr[i]);
    }
}
