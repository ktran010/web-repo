let meals = ["brunch", "lunch", "dinner"];
let images = ["brunch.jpg", "lunch.jpg", "dinner.jpg"];
let prevmeal;

for (i = 0; i < document.getElementsByClassName("meal").length; i++)
{
  console.log(meals[i]);
  document.getElementsByClassName("meal")[i].innerHTML = "<h2>" + meals[i] + "</h2>";
  document.getElementsByClassName("meal")[i].addEventListener('click', setActive, false);
  document.getElementsByClassName("meal")[i].id = meals[i];
}

document.getElementById('brunch').classList.toggle('active');
document.getElementById("image").innerHTML = "<img src = 'assets/" + images[0] + "' >";

function setActive(j)
{
  prevmeal = document.getElementsByClassName("active")[0].id;
  if (prevmeal != undefined)
  {
    document.getElementById(prevmeal).classList.toggle("active");
    document.getElementById(prevmeal + "menu").style.display = "none";
  }

  if(j.target.tagName == "H2")
  {
    j.target.parentNode.classList.toggle("active");
  }
  else
  {
      j.target.classList.toggle("active");
  }

  meal = document.getElementsByClassName("active")[0].id;
  document.getElementById(meal + "menu").style.display = "block";
  document.getElementById('image').innerHTML = "<img src = 'assets/" + meal + ".jpg'>";
}
