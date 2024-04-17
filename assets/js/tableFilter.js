// let mathElements = document.querySelectorAll(".math");
// let machineLearningElements = document.querySelectorAll(".machile-learning");

// Table elements
let tableElements = document.getElementsByTagName("tr");
let fixedToggleElements = document.querySelectorAll(".fixedToggle");

// Tags list
let ActiveTags = ["coding", "frontEnd", "dataScience", "others"];

// Toggle class in ActiveTags list
function toggleClass(tagName) {
  if (ActiveTags.includes(tagName)) {
    let index = ActiveTags.indexOf(tagName);
    ActiveTags.splice(index, 1);
  } else {
    ActiveTags.push(tagName);
  }
}

// Check table elements for elements with tag in ActiveTags list
function check() {
  for (let i = 1; i < tableElements.length; i++) {
    if (ActiveTags.length == 0) {
      tableElements[i].style.display = "none";
    } else {
      for (let j = 0; j < ActiveTags.length; j++) {
        let classArray = Array.from(tableElements[i].classList);
        if (classArray.includes(ActiveTags[j])) {
          tableElements[i].style.display = "table-row";
          break;
        } else {
          tableElements[i].style.display = "none";
        }
      }
    }
  }
}

// Add evento to filter buttons
for (let i = 0; i < fixedToggleElements.length; i++) {
  fixedToggleElements[i].addEventListener("click", function (event) {
    toggleClass(fixedToggleElements[i].id);
    check();
    event.preventDefault();
    if (fixedToggleElements[i].classList.contains("primary")) {
      fixedToggleElements[i].classList.remove("primary");
    } else {
      fixedToggleElements[i].classList.add("primary");
    }
  });
}
