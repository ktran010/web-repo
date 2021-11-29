here is the javascript just copy and pasted 

let days = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];
let prevday = "monday";


for(i=0; i<document.getElementsByClassName('days').length; i++){
  document.getElementsByClassName("days")[i].innerHTML="<h2>" + days[i] + "</h2>";

  document.getElementsByClassName("days")[i].addEventListener('click', setActive, false);

  document.getElementsByClassName("days")[i].id = days[i];

//  document.getElementById("one").addEventListener('click', setActiveButton, false);
//  document.getElementById("two").addEventListener('click', setActiveButton, false);
}

document.getElementById("mon").classList.toggle("active");


function setActive(e){

  prevday = document.getElementsByClassName("active")[0].id;
  if(prevday != undefined){
    document.getElementById(prevday).classList.toggle("active");
    document.getElementById(prevday + "menu").style.display = "none";
  }
  //prevday.classList.toggle('active');
  //console.log(e.target.innerHTML);

  if(e.target.tagName == "H2"){
    e.target.parentNode.classList.toggle("active");
  }
  else{
    e.target.classList.toggle("active");
  }

  days = document.getElementsByClassName('active')[0].id;
  console.log(days);
  document.getElementById(days + "menu").style.display = "block";




}

//function setActiveButton(e){
//  e.target.classList.toggle("active");
//}