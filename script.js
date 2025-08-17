function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}


function show(elementId) {

  var element = document.getElementById(elementId);
  console.log("Toggling element with ID:", elementId);
  if ( element.style.display === "none" ) {
    element.style.display = "block";
  } else {
    element.style.display = "none";
  }
}