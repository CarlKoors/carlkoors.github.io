function openNav() {
    document.getElementById("openButton").style.display="none";
    document.getElementById("nav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  }
  
function closeNav() {
    document.getElementById("nav").style.width = "0";
    document.getElementById("openButton").style.display="inline";
    document.getElementById("main").style.marginLeft= "25px";
    document.body.style.backgroundColor = "white";
  }