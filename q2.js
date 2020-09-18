window.onload=function(){
    let buses=[];

    if (localStorage.getItem("buses")==null){
        let stringbuses=JSON.stringify(buses);

        console.log(stringbuses);
        localStorage.setItem("buses",stringbuses);
    }
};

function display(bus_data=undefined){
    let resbuses;
    let samplearray='';
    if(bus_data==undefined){
        resbuses=JSON.parse(localStorage.getItem("buses"));
    }
    else{
        resbuses=bus_data;
    }

    resbuses.forEach(function(ele,index) {
        let presentrow=`<tr>
        <td>${index+1}</td>
        <td>${ele.name}</td>
        <td>${ele.source}</td>
        <td>${ele.destination}</td>
        <td>${ele.number}</td>
        <td>${ele.passengercapacity}</td>
        <td><button onclick="deletebt(${index})"</tr>`;

        samplearray += presentrow;
        
    });

    console.log(typeof(resbuses));
    document.getElementById('tblerows').innerHTML=samplearray;
}

function insert(e){
    e.preventDefault()
    let bus={};
    let name= document.getElementById("name").value;
    let source= document.getElementById("source").value;
    let destination= document.getElementById("destination").value;
    let number= document.getElementById("number").value;
    let passnumber= document.getElementById("pname").value;

    bus.name=name;
    bus.source=source;
    bus.destination=destination;
    bus.number=number;
    bus.passengercapacity=passnumber;

    let retbus=JSON.parse(localStorage.getItem("buses"));
    retbus.push(bus);
    strrtbuses=JSON.stringify(retbus);
    localStorage.setItem("buses",strrtbuses);

    let retbus1= JSON.parse(localStorage.getItem("buses"));
    display(retbus1);

    return false;

}




function search(){
    let a= document.getElementById("searching").value;

    let b=JSON.parse(localStorage.getItem("buses"));

    let ba=b.filter(function(element){
        if(element.source.indexOf(a)!=-1){
            return element.source.indexOf(a)!=-1;
        }
        else if (element.destination.indexOf(a)!=-1){
            return element.destination.indexOf(a)!=-1;
        };
    })

    display(ba);
}


function deletebt(index){

    let rtb= JSON.parse(localStorage.getItem("buses"));
    rtb.splice(index,1);
    display(rtb);
    localStorage.setItem("buses",JSON.stringify(rtb));
}