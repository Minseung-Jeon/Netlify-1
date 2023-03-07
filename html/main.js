//1. dynamic input blank quantity
//2. return all subtracted time difference

//later on: group the same tag and result prints it as groups

let time1 = document.getElementById("time1").value;
let time2 = document.getElementById("time2").value;

document.getElementById("time1").onchange = function () {
  diff(time1, time2);
};
document.getElementById("time2").onchange = function () {
  diff(time1, time2);
};

function diff(time1, time2) {
  time1 = document.getElementById("time1").value;
  time2 = document.getElementById("time2").value;
  tag1 = document.getElementById("tag1").value;

  time1 = time1.split(":");
  time2 = time2.split(":");

  let time1Date = new Date(0, 0, 0, time1[0], time1[1], 0);
  let time2Date = new Date(0, 0, 0, time2[0], time2[1], 0);

  let difference = time2Date.getTime() - time1Date.getTime();
  let hours = Math.floor(difference / 1000 / 60 / 60);
  difference = difference - hours * 1000 * 60 * 60;
  let minutes = Math.floor(difference / 1000 / 60);

  result =
    "subtracted time: " +
    (hours < 9 ? "0" : "") +
    hours +
    ":" +
    (minutes < 9 ? "0" : "") +
    minutes +
    " <br> tag: " +
    tag1;
  document.getElementById("output").innerHTML = result;
}

//--------------------------------------------------------


function addInputBoxes() {
  let number = document.getElementById("dynamicNumber").value;
  let container = document.getElementById("container");
/*
  while (container.hasChildNodes()){
    container.removeChild(container.lastChild);
  }
*/
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
