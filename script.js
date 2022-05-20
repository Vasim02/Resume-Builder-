function addNewWEField()
 {
   // console.log("Adding new field");

    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.setAttribute("row",3);

    let weOb=document.getElementById("we");
    let weAddButtonOb = document.getElementById("weAddButton");

    weOb.insertBefore(newNode,weAddButtonOb);
}


function addNewAQField()
 {
    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("aqField");
    newNode.setAttribute("row",3);

    let aqOb=document.getElementById("aq");
    let aqAddButtonOb = document.getElementById("aqAddButton");

    aqOb.insertBefore(newNode,aqAddButtonOb);  
}

//gentrating CV

function generateCV()
{
    let nameField=document.getElementById("nameField").value;

    let nameT1=document.getElementById('nameT1')
    nameT1.innerHTML=nameField;
    document.getElementById("nameT2").innerHTML=nameField;

    //FOR CONTACT

    document.getElementById("contactT").innerHTML=document.getElementById("contactField").value;
    //FOR ADDRESS
    document.getElementById("addressT").innerHTML=document.getElementById("addressField").value;
    //FOR FB
    document.getElementById("fbT").innerHTML=document.getElementById("fbField").value;
    //FOR INSTA
    document.getElementById("instaT").innerHTML=document.getElementById("instaField").value;
    //FOR LINKED
    document.getElementById("LinkedT").innerHTML=document.getElementById("linkedField").value;
    //FOR OBJECTIVE
    document.getElementById("objectiveT").innerHTML=document.getElementById("objectiveField").value;

    //FOR WE

    let wes=document.getElementsByClassName("weField");

    let str = "";

    for(let e of wes)
    {
        str=str+`<li>${e.value}</li>`;
    }
    document.getElementById("weT").innerHTML=str;

    //FOR AQ

    let aqs=document.getElementsByClassName("aqField");

    let str1 = "";

    for(let e of aqs)
    {
        str1=str1+`<li>${e.value}</li>`;
    }
    document.getElementById("aqT").innerHTML=str1;
     //code for profile photo
     let file=document.getElementById("imgField").files[0];
     console.log(file);
     let reader=new FileReader();
    reader.readAsDataURL(file);
    console.log(reader.result); 
    //set the image to template
    reader.onloadend=function(){
      document.getElementById("imgTemplate").src=reader.result;

    }


    document.getElementById("cv-form").style.display="none";
    document.getElementById("cv-template").style.display="block";


}


    //PRINT CV

    function PrintCV() {

       
        window.print()
}