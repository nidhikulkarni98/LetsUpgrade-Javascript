//assignment question 1
let st="program to find character in string";
console.log(st);
//to find character
console.log(st.indexOf('f'));

//assignment question 2
let st1="peogram to convert minute to string"
console.log(st1);
let min=45;
let seconds=min*45;
console.log("45 minutes is " +seconds);

//assignment question 3
let st2="program to find an element in array"
console.log(st2);
let array = [34, 40, 30, 50, 90];
let found = array.find(function (element) {
return element > 60;
});
console.log(found);

//assignment question 4
let arr=["nidhi","mira","pooja","divya"];
for(let i=0;i<arr.length;i++)
{
    let t= arr[i].search('a');
   if(t>0)
   {
      console.log(arr[i]);  
   }
    
}


//assignment question 5
let a=[1,2,3,4]
console.log(a);
console.log(a.reverse());