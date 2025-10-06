var income=1200000;
var total;

if(income<=250000){
    total=income;
    console.log(total);
}
else if(income>=250001 && income<=500000){
    total= income + income/20;
    console.log(total);
}
else if(income>=500001 && income<=1000000){
    total= income + income/5;
    console.log(total);
}
else{
    total= income + income/3.33;
    console.log(total);
}