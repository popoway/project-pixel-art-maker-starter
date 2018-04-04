// Select color input
var foreCanvasColor = "#000000";
$("#colorPicker").on("change",function(){
  foreCanvasColor = $("#colorPicker").val();
  console.log("foreCanvasColor = " + foreCanvasColor);
});
// Select size input
var canvasHeight = 1 , canvasWidth = 1;
$("#inputHeight").on("change",function(){
  canvasHeight = $("#inputHeight").val();
  console.log("canvasHeight = " + canvasHeight);
});
$("#inputWidth").on("change",function(){
  canvasWidth = $("#inputWidth").val();
  console.log("canvasWidth = " + canvasWidth);
});
// Listen to the click on pixels and change color subsequently
// use event delegation
$("table").on("mousedown","td",function(evt){
  if ($(evt.target).attr("style")){
    // if exists then remove (to white)
    $(evt.target).removeAttr("style");
    console.log("Pixel toggled to white");
  }
  else {
    $(evt.target).css("background-color", foreCanvasColor);
    console.log("Pixel toggled to " + foreCanvasColor);

  }
});


// When size is submitted by the user, call makeGrid()
$("#inputSubmit").on("click",makeGrid);
function makeGrid(evt) {
  // Your code goes here!
  evt.preventDefault(); // instructs the browser not to perform the default action

  // 1. remove existing canvas
  $( "tr" ).remove();
  $( "td" ).remove();
  console.log("Old canvas removed");

  // 2. build a new canvas with specific size
  for (var i = 1; i <= canvasHeight; i++){
    $("#pixelCanvas").append('<tr></tr>'); // add rows
  }
  for (var j = 1; j <= canvasWidth; j++){
    $("#pixelCanvas").children().append('<td></td>'); // add columns
  }
  console.log("Build a " + canvasWidth + " x " + canvasHeight + " canvas");
}
