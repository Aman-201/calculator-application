// document.querySelector(".zero").addEventListener('click',function()
// {
//   console.log(this.textContent);
// });
var num1=0,num2,opr;

var loc=document.querySelectorAll(".keys");
for(var i=0;i<loc.length;i++)
{
  loc[i].addEventListener("click",function(e)
{
  // document.querySelector(".screen").textContent+=this.getAttribute("data-value");
})
}
for(var i=0;i<loc.length;i++)
{
  loc[i].addEventListener("click",function()
{
  var inp=this.getAttribute("data-value");
  if(inp=='%' || inp=='+' || inp=='-' || inp=='*' || inp=='/' || inp=='%' || inp=="pn")
  {

    num1=document.querySelector(".screen").textContent;


    switch(inp)
    {
      case '%' :
      opr='%';
      break;
      case '+' :
      opr='+';
      break;
      case '-' :
      opr='-';
      break;
      case '*' :
      opr='*';
      break;
      case '/' :
      opr='/';
      break;
      case "pn" :
      opr='pn';
      break;

    }
    document.querySelector(".screen").textContent="";
  }
  else if(inp=="AC")
  {
    num1=0;
    document.querySelector(".screen").textContent="";
  }
  else if(inp=='=')
  {
num2=document.querySelector(".screen").textContent;
switch(opr)
{
  case '%' :
  if(num2==0)
  num1=Infinity;
  else
  num1=num1 % num2;
  break;
  case '+' :
  const x=parseInt(num1);
  const y=parseInt( num2);
  num1=x+y;
  break;
  case '-' :
  num1=num1 - num2;;
  break;
  case '*' :
num1=num1 * num2;;
  break;
  case '/' :
  if(num2==0)
  num1=Infinity;
  else
  num1=num1 / num2;;
  break;
  case "pn" :
  num1*=-1;
  break;

}
document.querySelector(".screen").textContent=num1;
// alert(num1+" "+opr+" "+num2);
  }
  else{
    document.querySelector(".screen").textContent+=this.getAttribute("data-value");
  }
});
}


// var num1,val1;
// var loc1=document;
// var num2,val2;
// var opr;
// loc1.addEventListener('click', function(e)
// {
// val1=e.target.classList[1];
// switch(val1)
// {
//   case "one":
//   num1=1;
//   break;
//   case "two":
//   num1=2;
//   break;
//   case "three":
//   num1=3;
//   break;
//   case "four":
//   num1=4;
//   break;
//   case "five":
//   num1=5;
//   break;
//   case "six":
//   num1=6;
//   break;
//   case "seven":
//   num1=7;
//   break;
//   case "eight":
//   num1=8;
//   break;
//   case "nine":
//   num1=9;
//   break;
//   case "zero":
//   num1=0;
//   break;
// }
//
// loc1.addEventListener('click', function(e)
// {
// val2=e.target.classList[1];
// switch(val2)
// {
//   case "one":
//   num2=1;
//   break;
//   case "two":
//   num2=2;
//   break;
//   case "three":
//   num2=3;
//   break;
//   case "four":
//   num2=4;
//   break;
//   case "five":
//   num2=5;
//   break;
//   case "six":
//   num2=6;
//   break;
//   case "seven":
//   num2=7;
//   break;
//   case "eight":
//   num2=8;
//   break;
//   case "nine":
//   num2=9;
//   break;
//   case "zero":
//   num2=0;
//   break;
// }
//
// });
// if(num2!=undefined && num1!=undefined)
// alert("number is "+ num1+"   "+ num2 );
// num2=undefined;
// num1=undefined;
//
//   // for(var i=0;i<kloc.length;i++)
//   // {
//   //   alert(kloc[i].classList[1]);
//   //   if(num1==kloc[i].classList[1])
//   //   {
//   //     num1=1;
//   //     break;
//   //   }
//   //   if(num1==kloc[i].classList[1])
//   //   {
//   //     num1=2;
//   //     break;
//   //   }
//   //   if(num1==kloc[i].classList[1])
//   //   {
//   //     num1=3;
//   //     break;
//   //   }
//   //   if(num1==kloc[i].classList[1])
//   //   {
//   //     num1=4;
//   //     break;
//   //   }
//   //   if(num1==kloc[i].classList[1])
//   //   {
//   //     num1=5;
//   //     break;
//   //   }
//   //   if(num1==kloc[i].classList[1])
//   //   {
//   //     num1=6;
//   //     break;
//   //   }
//   //   if(num1==kloc[i].classList[1])
//   //   {
//   //     num1=7;
//   //     break;
//   //   }
//   //   if(num1==kloc[i].classList[1])
//   //   {
//   //     num1=8;
//   //     break;
//   //   }
//   //   if(num1==kloc[i].classList[1])
//   //   {
//   //     num1=9;
//   //     break;
//   //   }
//   //   if(num1==kloc[i].classList[1])
//   //   {
//   //     num1=0;
//   //     break;
//   //   }
//   //
//   //
//   //
//   // }
//
// });
