let days = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];
let prevday = "monday";


document.getElementById("monday").addEventListener("click", setActiveButton, false);
document.getElementById("tuesday").addEventListener("click", setActiveButton1, false);
document.getElementById("wednesday").addEventListener("click", setActiveButton2, false);
document.getElementById("thursday").addEventListener("click", setActiveButton3, false);
document.getElementById("friday").addEventListener("click", setActiveButton4, false);
document.getElementById("saturday").addEventListener("click", setActiveButton5, false);
document.getElementById("sunday").addEventListener("click", setActiveButton6, false);


function setActiveButton(){
  document.getElementById("mon").style.display="block";
  document.getElementById("tues", "wed", "thurs", "fri", "sat", "sun").style.display="none";
}
function setActiveButton1(){
  document.getElementById("tues").style.display="block";
  document.getElementById("mon").style.display="none";
  document.getElementById("wed").style.display="none";
  document.getElementById("thurs").style.display="none";
  document.getElementById("fri").style.display="none";
  document.getElementById("sat").style.display="none";
  document.getElementById("sun").style.display="none";

}
function setActiveButton2(){
  document.getElementById("wed").style.display="block";
  document.getElementById("mon").style.display="none";
  document.getElementById("tues").style.display="none";
  document.getElementById("thurs").style.display="none";
  document.getElementById("fri").style.display="none";
  document.getElementById("sat").style.display="none";
  document.getElementById("sun").style.display="none";
}
function setActiveButton3(){
  document.getElementById("thurs").style.display="block";
  document.getElementById("mon").style.display="none";
  document.getElementById("wed").style.display="none";
  document.getElementById("tues").style.display="none";
  document.getElementById("fri").style.display="none";
  document.getElementById("sat").style.display="none";
  document.getElementById("sun").style.display="none";
}
function setActiveButton4(){
  document.getElementById("fri").style.display="block";
  document.getElementById("mon").style.display="none";
  document.getElementById("wed").style.display="none";
  document.getElementById("thurs").style.display="none";
  document.getElementById("tues").style.display="none";
  document.getElementById("sat").style.display="none";
  document.getElementById("sun").style.display="none";
}
function setActiveButton5(){
  document.getElementById("sat").style.display="block";
  document.getElementById("mon").style.display="none";
  document.getElementById("wed").style.display="none";
  document.getElementById("thurs").style.display="none";
  document.getElementById("fri").style.display="none";
  document.getElementById("tues").style.display="none";
  document.getElementById("sun").style.display="none";
}
function setActiveButton6(){
  document.getElementById("sun").style.display="block";
  document.getElementById("mon").style.display="none";
  document.getElementById("wed").style.display="none";
  document.getElementById("thurs").style.display="none";
  document.getElementById("fri").style.display="none";
  document.getElementById("sat").style.display="none";
  document.getElementById("tues").style.display="none";
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}


//quote section js
const quotes = ["First of all, I hate paper mache because I am not good at it." , "We’re not going to be young and extremely good looking forever, so sometimes you have to carpe yolo. Like carpe diem but you only live once.", "We’re prairie kids, and prairie kids f**kn send it.", "Asking me about where your abdominal pain is like asking a piece of grass what the sky is.", "Hold my beer. I’m going to catch a chicken.", "Is it weird to use “XD” in an email to a professor.", "I either need glasses or less beer.", "Let’s see who the steeziest on the block is and play a game of skate.", "It’s hard for me to read vibes without my contacts in.", "I would be so bad at swording.", "I haven’t run full speed in like multiple years.", "You look like lord farquads handsome cousin."];
    let quotecount = 0;

    document.getElementById("newquote").addEventListener("click", buttonClicked);

    function buttonClicked()
    {
      console.log(quotes[quotecount]);
      document.getElementById("qtext").innerHTML = quotes[quotecount];
      if(quotecount>=11)
      {
        quotecount = 0;
      }
      else
      {
        quotecount++;
      }
    }
