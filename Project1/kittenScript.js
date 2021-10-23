var catCounter = 0; // counts number of cats clicked


// resource used to figure out how to create a timer and find elapsed time:
// https://stackoverflow.com/questions/313893/how-to-measure-time-taken-by-a-function-to-execute

var timeStart = performance.now(); // start counter of time


// function that switches to the game page
function start() 
{
	location.href = "kittenCatcherRun.html";
}



// this function takes the user to the beginning page to restart the game
function replay()
{
    location.href = "kittenCatcher.html";
}



// kitten functions -- hides them upon click, and checks to see if they're the last kitten clicked

// referenced this site in order to figure out how to use two decimal places:
// https://www.w3schools.com/jsref/jsref_tofixed.asp

// referenced this site in order to figure out how to make kittens disappear on click:
// https://www.w3schools.com/howto/howto_js_toggle_hide_show.asp

function catOneA()
{
    document.getElementById("cat_1a").style.display = "none";
    catCounter++;
    if(catCounter == 10) // if this kitten was the last one to be clicked
    {
        var timeEnd = performance.now(); // takes the time upon click

        var timeElapse = ((timeEnd - timeStart) / 1000).toFixed(2); // find time elapsed, in seconds, rounded to 2 decimal places

        console.log(timeElapse + " seconds");

        showEnd(timeElapse);
    }
}

function catOneB()
{
    document.getElementById("cat_1b").style.display = "none";
    catCounter++;
    if(catCounter == 10)
    {
        var timeEnd = performance.now();

        var timeElapse = ((timeEnd - timeStart) / 1000).toFixed(2);

        console.log(timeElapse + " seconds");

        showEnd(timeElapse);
    }
}

function catTwoA()
{
    document.getElementById("cat_2a").style.display = "none";
    catCounter++;
    if(catCounter == 10)
    {
        var timeEnd = performance.now();

        var timeElapse = ((timeEnd - timeStart) / 1000).toFixed(2);

        console.log(timeElapse + " seconds");

        showEnd(timeElapse);
    }
}

function catTwoB()
{
    document.getElementById("cat_2b").style.display = "none";
    catCounter++;
    if(catCounter == 10)
    {
        var timeEnd = performance.now();

        var timeElapse = ((timeEnd - timeStart) / 1000).toFixed(2);

        console.log(timeElapse + " seconds");

        showEnd(timeElapse);
    }
}

function catThreeA()
{
    document.getElementById("cat_3a").style.display = "none";
    catCounter++;
    if(catCounter == 10)
    {
        var timeEnd = performance.now();

        var timeElapse = ((timeEnd - timeStart) / 1000).toFixed(2);

        console.log(timeElapse + " seconds");

        showEnd(timeElapse);
    }
}

function catThreeB()
{
    document.getElementById("cat_3b").style.display = "none";
    catCounter++;
    if(catCounter == 10)
    {
        var timeEnd = performance.now();

        var timeElapse = ((timeEnd - timeStart) / 1000).toFixed(2);

        console.log(timeElapse + " seconds");

        showEnd(timeElapse);
    }
}

function catFourA()
{
    document.getElementById("cat_4a").style.display = "none";
    catCounter++;
    if(catCounter == 10)
    {
        var timeEnd = performance.now();

        var timeElapse = ((timeEnd - timeStart) / 1000).toFixed(2);

        console.log(timeElapse + " seconds");

        showEnd(timeElapse);
    }
}

function catFourB()
{
    document.getElementById("cat_4b").style.display = "none";
    catCounter++;
    if(catCounter == 10)
    {
        var timeEnd = performance.now();

        var timeElapse = ((timeEnd - timeStart) / 1000).toFixed(2);

        console.log(timeElapse + " seconds");

        showEnd(timeElapse);
    }
}

function catFiveA()
{
    document.getElementById("cat_5a").style.display = "none";
    catCounter++;
    if(catCounter == 10)
    {
        var timeEnd = performance.now();

        var timeElapse = ((timeEnd - timeStart) / 1000).toFixed(2);

        console.log(timeElapse + " seconds");

        showEnd(timeElapse);
    }
}

function catFiveB()
{
    document.getElementById("cat_5b").style.display = "none";
    catCounter++;
    if(catCounter == 10)
    {
        var timeEnd = performance.now();

        var timeElapse = ((timeEnd - timeStart) / 1000).toFixed(2);

        console.log(timeElapse + " seconds");

        showEnd(timeElapse);
    }
}



// this function prints the time elapsed for the user
function showEnd(timeElapse)
{
    document.getElementById("container2").style.display = "block";
    document.getElementById("result").innerHTML = timeElapse + " seconds!";
}