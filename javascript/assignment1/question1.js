var a=99;
var b=45;
var c=0;
var d=29;
var e=99;
var total=a+b+c+d+e;
var per=total/5;
if(per>=90){
    console.log("A");
}
else if(per>=80 && per<=89){
    console.log("B");
}
else if(per>=70 && per<=79){
    console.log("C");
}
else if(per>=60 && per<=69){
    console.log("D");
}
else{
    console.log("E");
}