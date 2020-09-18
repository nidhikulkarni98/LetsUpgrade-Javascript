let persons=[
   {
       name:"nidhi",
       age:22,
       city:"vasco",
       salary:20000,
   },
   {
    name:"pooja",
    age:23,
    city:"new vaddem",
    salary:25000,
},
{
    name:"Lasya",
    age:24,
    city:"Margao",
    salary:30000,
},
{
    name:"niyati",
    age:26,
    city:"ponda",
    salary:28000,
},
{
    name:"kavya",
    age:28,
    city:"Bicholim",
    salary:40000,
}
];

function display(superarray){
    let trow="";
    let srname=1;

    persons.forEach(function(person,index)
    {
        let tdata=`<tr>
        <td>${srname}</td>
        <td>${person.name}</td>
        <td>${person.age}</td>
        <td>${person.city}</td>
        <td>${person.salary}</td>
        <td><button onclick='deletebt(${index})'>delete</button></tr></td>`;

        trow+=tdata;
         srname++;

    });

    document.getElementsByClassName("abc")[0].innerHTML=trow;

};
display();

function add(event)
{   
    event.preventDefault();
    let addperson={};
    let name=document.getElementById("name1").value;
    let age=document.getElementById("age1").value;
    let city=document.getElementById("city1").value;
    let salary=document.getElementById("salary1").value;
  
   addperson.name=name;
   addperson.age=Number(age);
   addperson.city=city;
   addperson.salary=salary;

   persons.push(addperson);
   console.log(addperson);

 display();
}

function searchbyname()
{
    let searchvalue=document.getElementById("search").value;
      let a =persons.filter(function(person){
        if(person.name.indexOf(searchvalue)!=-1)
        {
            return person.name.indexOf(searchvalue)!=-1;
        }
        else if (person.city.indexOf(searchvalue)!=-1)
        {
            return person.city.indexOf(searchvalue)!=-1;
        }
    });

    display();

}

function deletebt(index) {
    persons.splice(index,1);
    display(persons);
}

