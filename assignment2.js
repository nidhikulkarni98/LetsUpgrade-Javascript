function Changeimage()
{
    const ele=document.getElementById('image');
   const newurl="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT-25NUI1Jn5fPAF93uqSFEoxf1iL3ji_WMbQ&usqp=CAU";
   ele.src=newurl;
  
}

function backimage()
{
    const ele1=document.getElementById('image');
    const newurl1 = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRPgtHjduN7QEiy8X2dDt0N9w6imcF-9aarwg&usqp=CAU";
    ele1.src=newurl1;

}

function changeimage1()
{
    const ele2=document.getElementById('image');
   const newurl2="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT-25NUI1Jn5fPAF93uqSFEoxf1iL3ji_WMbQ&usqp=CAU";
   ele2.src=newurl2;
}

function changetext()
    {
        let sau=document.getElementById('n1').value;
        document.getElementById('n2').value=sau;

        
    }


    let passenger =[
    {
        name: "Nidhi",
        age: 22,
        country: "india",
        hobbies: ['talking','dance']
    },
    {
        name: "Neha",
        age: 30,
        country: "USA",
        hobbies: ['talking','dance']
    },
    {
        name: "Naina",
        age: 40,
        country: "UK",
        hobbies: ['talking','dance']
    },
]
function display(){
    passenger.forEach(element =>{
        console.log(element);

    })
}
display();
     


function age(){
    console.log(`people with age less then 30`);
      passenger.forEach(ele =>{
           if(ele.age<30){
               console.log(ele);
           }

      })
}
age();


function countrys(){
    console.log(`people with india country`);
     passenger.forEach(ele=>
        {
            if(ele.country=='india'){
                console.log(ele);
            }
        })

}
countrys();
