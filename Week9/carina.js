//
// const looks = ["look1", "look2", "look3"];
// for(1=0; i<document.getElementsByClassName('look').length; i++){
//   console.log(looks[i]);
//   document.getElementsByClassName("look")[i].innerHTML = "<h2>" + looks[i] + "</h2>";
//   document.getElementsByClassName("look")[i].id = looks[i];
// }

let meal = ["lunch", "dinner", "brunch"];
let image = ["lunch.jpg", "dinner.jpg", "brunch.jpg"];
let prevmeal;

for(i=0; i<document.getElementsByClassName("meal").length; i++){
  document.getElementsByClassName("meal")[i].innerHTML = "<h2>" + meal[i] + "</h2>";
  document.getElementsByClassName("meal")[i].addEventListener("click", setActive, false);
  document.getElementsByClassName("meal")[i].id = meal[i];
  // console.log(i);
}

document.getElementById("lunch").classList.toggle('active');
document.getElementById("image").innerHTML = "<img src='assets/" + image[0] + "' >";

function setActive(e){
  // console.log("clicked");

  prevmeal = document.getElementsByClassName("active")[0].id;
  // console.log("previous meal: " + prevmeal);
  if(prevmeal != undefined){
    document.getElementById(prevmeal).classList.toggle("active");
    document.getElementById(prevmeal + "menu").style.display = "none";
  // document.getElementsByClassName("active")[0].classList.toggle("active");
  // let prevmeal = document.getElementsByClassName("active")[0].id + "menu";
  // console.log(prevmeal);
}

  if(e.target.tagName == "H2"){
    e.target.parentNode.classList.toggle("active");
    // meal = e.target.innerHTML;
  }else{
    e.target.classList.toggle("active");
    // meal = e.target.firstChild.innerHTML;
  }

  meal = document.getElementsByClassName('active')[0].id;
  console.log(meal);
  document.getElementById(meal + "menu").style.display = "block";
  document.getElementById("image").innerHTML = "<img src='assets/" + meal + ".jpg' >"

}
