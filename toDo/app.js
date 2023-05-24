const inputBox = document.getElementById("inputBox");
const listContainer = document.getElementById("listContainer");

function createTask() {
  //   Checked Input Value
  if (inputBox.value === "") {
    alert("You Must Add Some Task");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData();
}

listContainer.addEventListener(
  "click",
  function (track) {
    if (track.target.tagName === "LI") {
      track.target.classList.toggle("checked");
      saveData();
    } else if (track.target.tagName === "SPAN") {
      track.target.parentElement.remove();
      saveData();
    }
  },
  false
);

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTaskList() {
  listContainer.innerHTML = localStorage.getItem("data");
}

showTaskList();
