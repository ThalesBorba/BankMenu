function hideBalance() {
    var balance = document.getElementById("balance")
    if (balance.style.display === "none") {
        balance.style.display = "block";
      } else {
        balance.style.display = "none";
      }
}

function adaptButton() {
  var buttons = document.getElementsByClassName("square")

  buttons.forEach(button => {
    button.style.height = button.style.width
  });
}

window.onresize = adaptButton