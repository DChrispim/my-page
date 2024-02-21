let mathElements = document.querySelectorAll(".math");
let machineLearningElements = document.querySelectorAll(".machile-learning");
let tableElements = document.getElementsByTagName("tr")
let fixedToggleElements = document.querySelectorAll(".fixedToggle")


let ActiveTags = ["math", "python", "machineLearning"]

function toggleClass(tagName) {
    if (ActiveTags.includes(tagName)) {
        let index = ActiveTags.indexOf(tagName);
        ActiveTags.splice(index, 1);
    } else {
        ActiveTags.push(tagName)
    }
}

function hasActiveTag (tag) {
    return ActiveTags.some(tag)
}

function check() {
    for (let i=1; i < tableElements.length; i++) {
        if (ActiveTags.length == 0) {
            tableElements[i].style.display = "none";
        } else {
            for (let j=0; j<ActiveTags.length; j++) {
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



for (let i=0; i<fixedToggleElements.length; i++) {
    fixedToggleElements[i].addEventListener("click",function (event)  {
        toggleClass(fixedToggleElements[i].id);
        check();
        event.preventDefault();
        if (fixedToggleElements[i].classList.contains("active")) {
            fixedToggleElements[i].classList.remove("active");
        } else {
            fixedToggleElements[i].classList.add("active");
        };
    })
}
