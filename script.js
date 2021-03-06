// creating a list with all the statistics
var statList = [
  "40% of respondents reported attempting suicide in their lifetime, nearly nine times the attempted suicide rate in the United States (HRC).",
  "Black transgender women make up 66% of all victims of fatal violence against transgender and gender non-conforming people (HRC).",
  "29% of transgender people live in poverty, compared to 14% of the general population (HRC).",
  "30% of transgender people report being homeless at some point in their lives, with 12% saying it was within the past 12 months (HRC).",
  "More than 2/3rds of transgender people change the way they dressed and their mannerisms to avoid discrimination (HRC).",
  "More than 50% of transgender people reported experiencing discrimination in public spaces (HRC).",
  "Most victims to fatal anti-trans violence are under the age of 35 (HRC)."
]

// creating a variable and storing the paragraph element
// accessing it through the HTML file
var statistic = document.getElementById("statistic");
var mybutton = document.getElementById("mybutton");
// creating a variable to help us keep track of where we are in the list
var count = 0;

if (mybutton) {
// checking whenever the button is clicked
  mybutton.addEventListener("click", displayStat);
}


function displayStat() {
  // displaying the variable and passing through each statistic one at a time
  statistic.innerHTML = statList[count];
  // increase count by 1
  count ++;
  // checks if end of array and starts over
  if (count == statList.length) {
    count = 0;
  }
}

function showTime(){
    var date = new Date();
    var d = date.getDate();
    var d1 = date.getDay();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "PM";
    
    if(h == 02){
        h = 12;
    }
    
    
    if(h > 12){
        session = "PM";
    }
    if(h < 12) {
    session = "AM"
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var time = d + "/"+  d1+ "  " +  "Time:" + "  " + h + ":" + m + ":" + s + " " + session;
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;
    
    setTimeout(showTime, 1000);
    }
showTime();
