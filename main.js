// function sparkling() {
//   let text = document.getElementById("pasko");
//   let colors = ["red", "green", "yellow"];
//   let generateColor = Math.floor(Math.random()*3);
//   text.style.color = colors[generateColor];

// }

// function start() {
//   start_color = setInterval(sparkling,1000);
// }

// function stop() {
//   clearInterval(start_color);
// }

// function christmasTree() {
//   let h = document.getElementById("christmasTreeInputHeight").value;

//   for (var i = 1; i <= h; i++) {
//     for (var j = (h-1); j > 0; j--) {
//       document.write(" "); 
//     }
//     for (var k = 1; k <= i; k++) {
//       document.write("* ");
//     }
//     document.write("<br>");
//   }

//   document.getElementById("christmasTreeOutput").value = christmasTree();
// }

function bgcChange() {
  var x = Math.floor(Math.random() * 256); // range is 0-255
  var y = Math.floor(Math.random() * 256);
  var z = Math.floor(Math.random() * 256);

  //alert(x +' ' + y +' ' + z);
  var valueRgb = "rgb(" + x + "," + y + "," + z + ")";
  var valueRgb2 = "rgb(" + z + "," + x + "," + y + ")";
  //alert(value);

  //document.getElementById("body").style.backgroundColor = valueRgb;
  //document.getElementById("btn_bgcChangeOn").style.backgroundColor = valueRgb2;

  let a = document.getElementById("body");
  let b = document.getElementById("logRecordTextarea");
    a.style.backgroundColor = valueRgb;
    b.value = valueRgb;
} 

function startBgcChange() {
  startChange = setInterval(bgcChange,500);
}

function stopBgcChange() {
  clearInterval(startChange);
}