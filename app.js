/*CHAPTER 31-34 "DATE METHODS"*/
//1
// var currentTime= new Date();
// document.write(currentTime);

//2
// var monthNames = ["January","Febuary","March","April","May","June","July","August","September","October","November","December"];
// var currentTime= new Date();
// var currentMonth= currentTime.getMonth();
// var theMonth = monthNames[currentMonth]
// document.write("Current Month:"+" "+ theMonth);

//3
// var dayNames = ["Sun","Mon","Tues","Wed","Thur","Fri","Sat"];
// var currentTime= new Date();
// var currentDay= currentTime.getDay();
// var theDay = dayNames[currentDay] 
// document.write("Today is"+ " "+ theDay);

//4
// var dayNames = ["Sun","Mon","Tues","Wed","Thur","Fri","Sat"];
// var currentTime= new Date();
// var currentDay= currentTime.getDay();
// var theDay = dayNames[currentDay];
// if(theDay === "Sun" || theDay === "Sat"){
//     document.write("“It’s Fun day”")
// }

//5
// var currentTime= new Date();
// var currentDate= currentTime.getDate();
// if(currentDate <= 15){
//       document.write("“First fifteen days of the month”")
// } 
// else if(currentDate >= 16){
//     document.write("“Last days of the month”")
// }

//6
// var currentDate = new Date();
// var milliSeconds = currentDate.getTime();
// var a = milliSeconds/60/60
// document.write("Current Date:"+" "+currentDate + "<br/>" +"Elapsed milliseconds since January 1, 1970:"+" "+ milliSeconds+ "<br/>" + "Elapsed minutes since January 1, 1970:"+" "+a)

//7
// var currentTime= new Date();
// var hours= currentTime.getHours();
// if(hours < 12){
//     alert("“Its AM”")
// }
// else if(hours >= 12){
//     alert("“its PM”")
// }

//8
// var laterDate= new Date("dec 31, 2020");
// document.write("Later Date:"+" "+laterDate);

//9
// var currentTime= new Date();
// var a= currentTime.getTime();

// var ramadan= new Date("april 25, 2020");
// var b= ramadan.getTime();

// var diff= a-b

// var totalDays= diff/(1000*60*60*24);
// var passedDays= Math.ceil(totalDays)

// alert(passedDays+" "+"days have passed since 1st Ramadan,2020");

//10
// var currentSeconds= new Date();
// var a= currentSeconds.getTime();

// var passedSeconds= new Date("Jan 01, 2021");
// var b= passedSeconds.getTime();

// var diff= a-b;
// document.write("On reference date"+" "+currentSeconds+","+"<br/>"+diff+" "+"seconds had passed since beginning of 2021");

//11
// var currentTime = new Date();
// var nextHour = new Date(currentTime.getFullYear(),currentTime.getMonth(),currentTime.getDate(),currentTime.getHours()+1,currentTime.getMinutes());

// alert("Current Date:"+" "+nextHour +"1 hour ago, it was"+" "+currentTime);

//12
// var currentTime = new Date();
// var nextHour = new Date(currentTime.getFullYear()-100,currentTime.getMonth(),currentTime.getDate(),currentTime.getHours()+1,currentTime.getMinutes());

// alert("Current Date:"+" "+currentTime +"100 Years back, it was"+" "+nextHour);

//13
// var currentDate= new Date();
// var year= currentDate.getFullYear();
// var currentAge= prompt("Enter your age","Your age is");
// var calcAge= year-currentAge;
// document.write("Your age is"+" "+currentAge+"<br/>"+"Your birth year is"+" "+ calcAge);

//14
// var unitsNo=550;
// var unitsCharges=20;
// var payableAmount= unitsNo*unitsCharges;
// var lateCharges= 500;
// var latePayableAmount=payableAmount+lateCharges;
// document.write("<b>'K-Electric Bill'</b>"+"<br/>"+"<br/>"+"<br/>"+"Customer Name: <b>XYZ Customer</b>"+"<br/>"+"Month: <b>December</b>"+"<br/>"+"Number of units: <b>550</b>"+"<br/>"+"Charges per units: <b>20</b>"+"<br/>"+"<br/>"+"Net Amount Payable (within Due Date):"+" "+ payableAmount+"<br/>"+"Late Payment Surcharge:"+" "+lateCharges+"<br/>"+"Gross Amount Payable (after Due Date):"+" "+latePayableAmount )

/*CHAPTER 35-38 "FUNCTION"*/
//1
// function time(){
//     var time = new Date();
//     alert(time);
// }

// time();

//2
// function greeting(){
//     var firstName= prompt("Enter your first name","Your first name is");
//     var lastName= prompt("Enter your last name","Your last name is");
//     alert("Hello"+" "+firstName+" "+lastName+" "+","+" "+ "How are youu!")
// }

// greeting();

//3
// function addition(){
//     var a= +prompt("Enter 1st your value");
//     var b= +prompt("Enter your 2nd value");
//     var c = a+b;
//     alert("Your output is:"+" "+c)
// }

// addition();

//4
// function calculator(){
// var firstNumber = +prompt("Enter first number");
// var secondNumber = +prompt("Enter second number");
// var sign = prompt("Enter your operator") ;
// if (sign === '+'){
//     alert(firstNumber+secondNumber)
// }else if (sign === '-'){
//     alert(firstNumber-secondNumber)
// }else if (sign === '*'){
//     alert(firstNumber*secondNumber)
// }else if (sign === '/'){
//     alert(firstNumber/secondNumber)
// }else if (sign === '%'){
//     alert(firstNumber%secondNumber)
// }
// }

// calculator();

//5
// function math(squares){
//     alert("Square of 5 is"+" "+squares*squares)
// }

// math("5")

//6
// function factorial(){
// var a = 6;
// var b= 1*2*3*4*5*a;
// alert("Factorial of 6:"+" "+b);
// }

// factorial();

//7



//8
//     var base = 5;
//     var perpendicular= 12; 
// function hypotenuse(){
//     var base = 5;
//     var perpendicular= 12; 
//     var hypotenuse = "";
//     function squares(base,perpendicular,hypotenuse){
//          var b= base;
//          var p = perpendicular;
//          var h = hypotenuse;

//          return((Math.sqrt(Math.pow(b,2)+Math.pow(p,2))).toFixed(2))
//     }
//     return (squares(base,perpendicular,hypotenuse))
// }
// var total= hypotenuse();
// document.write("Base <sup>2</sup>  &#8776;"+" "+base+"<sup>2</sup>" +"<br/>"+"Perpendicular <sup>2</sup>  &#8776;"+" "+perpendicular+"<sup>2</sup>"+"<br/>")
// document.write("Hypotenuse  &#8776;"+" "+ Math.floor(total));

//9
// var width= 12;
// var height= 7;
// function area(width,height){
//     var w=width;
//     var h=height;
//     return (w*h)
// }
// document.write("<b> i. Arguments as value: </b> <br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Area of Rectangle is"+" "+ area(width.valueOf(), height.valueOf())+"<br/><br/><br/>");
// document.write("<b> ii. Arguments as variables: </b>  <br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Area of Rectangle is"+" "+area(width,height));

//10
// var string= prompt("Enter a string to check its plaindrome or not");
// function plaindrome(str){
//     var str=str;
//     var strrev= "";

//     for(let i = str.length-1; i >= 0; i--){
//         strrev += str[i];
//     }

//     if(str == strrev){
//         document.write("Its Plaindrome");
//     }
//     else{
//         document.write("Its not Plaindrome");
//     }
// }

// plaindrome(string);

//11
// var str = prompt("Enter a String value");

// function convert(String){
//     var str = string;
//     var strConv = str.split(" ");

//     var upper =[];
//     for (let index = 0; index < strConv.length; index++) {
//         var first = strConv[index].slice(0, 1);
//         var last = strConv[index].slice(1);
//         first = first.toUpperCase()
//         var word = first + last + " ";
//         upper += word;
//     }
//     upper = upper.toString();
//     return upper;
// }

// alert("Input String :" + str);
// alert("Output String:" + convert(Str));


//12
// var str= prompt("Enter your text");
// function find(string){
//          var str=string;
//          var splitedStr = str.split(" ");
//          var count= 0;
//          var number = 0;
//          for (let index =0; index < splitedStr.length; index++ ){
//              var length = splitedStr[index].length;
//              if (length>count){
//                  count=length;
//                number=index;
//                length=0;
//              }
//          }
//          return(splitedStr[number]+ "<br> length is "+ count);
// }
// document.write("Input string :"+ str+"<br/>");
// document.write("Longest Word :"+ find(str));

//13
// var str= prompt("enter a string");
// var ltr=prompt("enter a letter");


// function findletter(string,letter) {
//     var str=string;
//     var ltr=letter;
//     var count= 0;
//     for (let index=0; index < str.length; index++) {
//         if(ltr=== str[index]) {
//             count += 1;
//         }
//     }
//     return count
// }
// document.write("Input string :"+str+"<br/>");
// document.write("Number of "+ ltr+"'s:"+" "+findletter(str,ltr));

//14
// var heading="<b>The Geometrizer:</b> <br/><br/>"
// document.write(heading);

// var r = 30;
// function circumference(Radius){
//     var r= Radius;
//     return(2*(Math.PI * r)).toFixed(2);
// } 
// function area(Radius){
//          var r = Radius;
//          return(Math.PI*(Math.pow(r,2))).toFixed(2);
// }
// document.write("a. Circumference of circle is :"+ circumference(r));
// document.write("<br> b.  Area of circle is :"+ area(r));

/*CHAPTER 38-42 "FUNCTIONS, SWITCH STATEMENTS, WHILE... DO-WHILE LOOPS"*/
//1
// function power(a,b){
//     var power= a;
//     for (i = 0; i  < b-1; i++){
//         power *=a;

//     }
// return document.write(a +" "+ "raise to"+" "+ b + " "+"is:"+" "+ power);
// }

// power(6,9);

//2
// function leapYear(){
//     var year=prompt("Enter a Leap year");
//     switch(year){
//         case "2012":
//             alert("2012 is a Leap Year");
//             break;
//         case "2016":
//             alert("2016 is a Leap Year");
//             break;
//         case "2020":
//             alert("2020 is a Leap Year");
//             break;
//         default:
//             alert(year+" "+"is not a Leap Year");           
//     }
// }

// leapYear()

//3
// var a= 6;
// var b= 6;
// var c= 6;

// function side(a,b,c){
//     var side= (a+b+c)/2;
//     return side;
// }
//   function area(a,b,c){
//        var s = side(a,b,c);
//        console.log("s is:"+ side);
//        var areaS= s*(s-a)*(s-b)*(s-c);
//        return document.write("Area of Triangle is:"+areaS);
//   }

// area(a,b,c);

//5
// var a= prompt("Enter your word ","PAKISTAN",);
// a = a.toUpperCase();
// var str = 'PAKISTAN';
// function indexOf(a,s){
//     var ch = a;
//     var string = s;
//     var poss='';

//     for( i=0; i < string.length; i++ ) {
//         if(string[i]===ch ){
//             poss=i;
//             break;
//         }
//     }
//     return poss;
// }

// document.write("Index of "+ a +"is"+ indexOf(a,str));

//7
// var sen = prompt("enter your text");
// sen = sen.toUpperCase();
// var newArray = [];
// var sent = "";

// function vowel(sentence) {
//     var s = sentence;
//     var a = s.split('');
//     var count = 0;
//     for (i = 0; i < a.length - 1; i++) {
//         var x = a[i];
//         var y = a[i + 1];
//         var z = x + y;
//         switch (z) {
//             case 'AA':
//                 count = count + 1;
//                 newArray.push(z);
//                 break;
//             case 'AE':
//                 count = count + 1;
//                 newArray.push(z);
//                 break;
//             case 'AI':
//                 count = count + 1;
//                 newArray.push(z);
//                 break;
//             case 'AO':
//                 count = count + 1;
//                 newArray.push(z);
//                 break;
//             case 'AU':
//                 count = count + 1;
//                 newArray.push(z);
//                 break;
//             case 'EA':
//                 count = count + 1;
//                 newArray.push(z);
//                 break;
//             case 'EE':
//                 count = count + 1;
//                 newArray.push(z);
//                 break;
//             case 'EI':
//                 count = count + 1;
//                 newArray.push(z);
//                 break;
//             case 'EO':
//                 count = count + 1;
//                 newArray.push(z);
//                 break;
//             case 'EU':
//                 count = count + 1;
//                 newArray.push(z);
//                 break;
//             case 'IE':
//                 count = count + 1;
//                 newArray.push(z);
//                 break;
//             case 'IA':
//                 count = count + 1;
//                 newArray.push(z);
//                 break;
//             case 'II':
//                 count = count + 1;
//                 newArray.push(z);
//                 break;
//             case 'IO':
//                 count = count + 1;
//                 newArray.push(z);
//                 break;
//             case 'IU':
//                 count = count + 1;
//                 newArray.push(z);
//                 break;
//             case 'OA':
//                 count = count + 1;
//                 newArray.push(z);
//                 break;
//             case 'OE':
//                 count = count + 1;
//                 newArray.push(z);
//                 break;
//             case 'OI':
//                 count = count + 1;
//                 newArray.push(z);
//                 break;
//             case 'OU':
//                 count = count + 1;
//                 newArray.push(z);
//                 break;
//             case 'OO':
//                 count = count + 1;
//                 newArray.push(z);
//                 break;
//             case 'UA':
//                 count = count + 1;
//                 newArray.push(z);
//                 break;
//             case 'UE':
//                 count = count + 1;
//                 newArray.push(z);
//                 break;
//             case 'UI':
//                 count = count + 1;
//                 newArray.push(z);
//                 break;
//             case 'UO':
//                 count = count + 1;
//                 newArray.push(z);
//                 break;
                
//         }
//     }
// }

// document.write(sen + "Such occurrences are"+" "+vowel(sen));

//8
// var num= +prompt("Enter Distance Between Two Cities");

// function meters(num) {
//       var m= num*1000;
//       return m; 
// }
// function feet(num) {
//     var f= num*3280.84;
//     return f; 
// }
// function centiMeters(num) {
//     var c = num*100000;
//     return c; 
// }
// function inch(num) {
//     var i= num*39370;
//     return i; 
// }
// document.write("<b>The distance between two cities are</b>"+"<br><br>"+"In Meter:"+ meters(num)+"<br>"+"In Feet:"+ feet(num)+"<br>"+"In Centimeters:"+ centiMeters(num)+"<br>"+"In Inches:"+ inch(num));




