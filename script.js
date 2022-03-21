const addBtn = document.querySelector(".add");
const deleteBtns = document.getElementsByClassName("delete-note");
const deleteAllBtn = document.querySelector(".delete-all");
const saveBtn = document.querySelector(".save");
const cancelBtn = document.querySelector(".cancel");
const select = document.querySelector("select");

const noteArea = document.querySelector(".note-area");
const notePanel = document.querySelector(".note-panel");
const category = document.querySelector("#category");
const textArea = document.querySelector("#text");
const error = document.querySelector(".error");

let selectedValue;
let cardId = 1;

const openPanel = () => {
  notePanel.style.display = "flex";
};

const closePanel = () => {
  notePanel.style.display = "none";
  error.style.visibility = "hidden";
  textArea.value = "";
  category.selectedIndex = 0;
};

const addNote = () => {
  if (
    textArea.value !== "" &&
    category.options[category.selectedIndex].value !== "0"
  ) {
    createNote();
    error.style.visibility = "hidden";
  } else {
    error.style.visibility = "visible";
  }
};

const createNote = () => {
  const newNote = document.createElement("div");
  newNote.classList.add("note");
  newNote.setAttribute("id", cardId);
  newNote.innerHTML = `
  <div class="note-header">
    <h3 class="note-title">${selectedValue} #${cardId}</h3>
    <button class="delete-note" onclick="singleRemove(${cardId})"><i class="fa-solid fa-xmark"></i></button>
  </div>
  <div class="note-body">
    ${textArea.value}
  </div>`;
  cardId++;
  noteArea.appendChild(newNote);
  closePanel();
  checkColor(newNote);
};

const selectValue = () => {
  selectedValue = category.options[category.selectedIndex].text;
};

const checkColor = (note) => {
  switch (selectedValue) {
    case "Shopping":
      note.style.backgroundColor = "rgb(72,255,0)";
      break;
    case "Work":
      note.style.backgroundColor = "rgb(255,243,0)";
      break;
    case "Other":
      note.style.backgroundColor = "rgb(0,170,255)";
      break;
  }
};

const singleRemove = (id) => {
  const noteToDelete = document.getElementById(id);
  noteArea.removeChild(noteToDelete);
};

addBtn.addEventListener("click", openPanel);
cancelBtn.addEventListener("click", closePanel);
saveBtn.addEventListener("click", addNote);
select.addEventListener("change", selectValue);
