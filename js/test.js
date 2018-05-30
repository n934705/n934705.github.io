
// 問候訊息依時間不同變更
var today=new Date();
var hournow=today.getHours();
var greeting;

if(hournow>18){
    greeting="Good Evening!";
}else if(hournow>12){
    greeting="Good Afteroon!";
}else if(hournow>0){
    greeting="Good Monring!";
}else{
    greeting="Welcome!";
}

document.write("<h1>"+greeting+"</h1>");