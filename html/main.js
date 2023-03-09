//1. dynamic input blank quantity

//later on: group the same tag and result prints it as groups

let outputOfTime = "";

function repeat(numberOfTimeInput) {
  calculate(numberOfTimeInput - 1, numberOfTimeInput, numberOfTimeInput / 2);

  const newCount = numberOfTimeInput - 2;

  if (newCount > 0) {
    repeat(newCount);
  }
}

function calculate(x, y, tagNum) {
  earlierTime = document.getElementById("time" + x).value;
  laterTime = document.getElementById("time" + y).value;
  tag = document.getElementById("tag" + tagNum).value;

  earlierTime = earlierTime.split(":");
  laterTime = laterTime.split(":");

  let earlierDate = new Date(0, 0, 0, earlierTime[0], earlierTime[1], 0);
  let laterDate = new Date(0, 0, 0, laterTime[0], laterTime[1], 0);

  let difference = laterDate.getTime() - earlierDate.getTime();
  let hours = Math.floor(difference / 1000 / 60 / 60);
  difference = difference - hours * 1000 * 60 * 60;
  let minutes = Math.floor(difference / 1000 / 60);

  outputOfTime =
    " <br> Time you Spent on this tag " +tag + ":"
    (hours < 9 ? "0" : "") +
    hours +
    ":" +
    (minutes < 9 ? "0" : "") +
    minutes +
    outputOfTime;

  output(outputOfTime);
}

function output(outputOfTime) {
  document.getElementById("ButtonOutput").innerHTML = outputOfTime;
}

















//--------------------------------------------------------
//dynamic input box based on user's input
/*
function addInputBoxes() {
  let number = document.getElementById("dynamicNumber").value;
  let container = document.getElementById("container");

  while (container.hasChildNodes()){
    container.removeChild(container.lastChild);
  }

  for (i = 0; i < number; i++) {
    container.appendChild(document.createTextNode(" time " + (i+1) +" "));
    let input = document.createElement("input");

    input.type = "time";
    input.id = "time" + i;

    container.appendChild(input);    
    

    if (i%2 == 1){
      container.appendChild(document.createElement("br"));
    }
  }
}
*/
