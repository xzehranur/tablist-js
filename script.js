function openTab(tabName) {
  var tabContents = document.querySelectorAll(".tab-content");
  tabContents.forEach(function (content) {
    content.style.display = "none";
  });

  var tabButtons = document.querySelectorAll(".tab");
  tabButtons.forEach(function (button) {
    button.classList.remove("active-tab");
  });

  document.getElementById(tabName + "-content").style.display = "block";

  document.getElementById(tabName + "-button").classList.add("active-tab");
}

openTab("tab1");
