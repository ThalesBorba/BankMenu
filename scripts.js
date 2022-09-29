function hideBalance() {
    var balance = document.getElementById("balance")
    if (balance.style.display === "none") {
        balance.style.display = "block";
      } else {
        balance.style.display = "none";
      }
}