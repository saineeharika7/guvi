const readline = require('readline');
const inp = readline.createInterface({
    input:process.stdin
});
const userInput = [];
inp.on("line",(data) => {
    userInput.push(data);
});
inp.on("close",() => {
    console.log(fun(userInput));
});
function fun(data){
    var s = data[0].split(' ');
   if(s[0].includes(s[1])){
       return "Yes"
   }
   else{
    
    return "No" 
   }
}
