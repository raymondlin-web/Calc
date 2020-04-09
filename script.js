var perfButt = document.getElementById("PERFECT");
var fortButt = document.getElementById("fortune-button")
var sqrethisElement = document.getElementById("sqrethis");
var nameInputElement = document.getElementById("fortname")

perfButt.addEventListener("click", sqrethis);
fortButt.addEventListener("click", future)

function sqrethis() {
  var num = sqrethisElement.value;
  console.log(number*number);
}
function future() {
  if (fortune < "G") {
      console.log("Good luck with life");
    }
  else if (fortune < "N") {
      console.log("Bad luck incoming");
    }
  else if (fortune < "T") {
      console.log("Wow great luck for you");
    }
  else {
      console.log("Pretty OK for now");
    }
}
