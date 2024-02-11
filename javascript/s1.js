console.log("sujal"); 
console.log("sujal",7,{"sujal":7});
for(let i=0;i<6;i++)
{ let str="";
   for(let j =0;true;j++)
    {  str+= "*";
        if(j===i)
          break;
    }
    console.log(str);
}

let exp = "+";
let a=10;
let b=10;
switch(exp){
    case '+': 
    console.log(a+b);
    break;
    case "-":
        console.log(a-b);
        break;
    default:
        console.log("invalid input");
}
