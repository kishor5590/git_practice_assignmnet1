function prime(number){

let factor=0;

for(let i=0;i<=number;i++){
if(number%i==0){
factor++
}
}

if(count<2){
return true;
}
else{
return false;
}

}

let ans=prime(13);
if(ans==true){
console.log("prime number");
}
else{
console.log("not  a prime");
}