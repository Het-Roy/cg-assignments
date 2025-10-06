var units=210;
var total;

if(units<=100){
    total=units*5;
    console.log(total);
}
else if(units<=300){
    total=(100*5)+((units - 100)*7);
    console.log(total);
}
else{
    total=(100*5)+(200*7)+((units - 300)*10);
    console.log(total);
}
