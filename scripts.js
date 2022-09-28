function hideBalance() {
    var balance = document.getElementById("balance")
    if (balance.style.display === "none") {
        balance.style.display = "block";
      } else {
        balance.style.display = "none";
      }
}


function resizeAdjustments() {
  var button = document.getElementsByClassName("square");

  for (var i = 0; i < button.length; i++) {
    button[i].style.height = button[i].style.width;
  }
}

window.onresize = resizeAdjustments;