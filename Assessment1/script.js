const addQuestionBtn = document.getElementById("addQuestionBtn");
const formContainer = document.getElementById("formContainer");
const closeFormBtn = document.getElementById("closeFormBtn");
const questionForm = document.getElementById("questionForm");
const cardsContainer = document.getElementById("cardsContainer");
let isEditing = false

let notes = [];

//on add question click it will remove hidden class from form container
addQuestionBtn.addEventListener("click", () => {
  formContainer.classList.remove("hidden");
});

// on cross button will again add hidden class and also reset question form
closeFormBtn.addEventListener("click", () => {
  formContainer.classList.add("hidden");
  questionForm.reset();
});

// if(!isEditing){
  questionForm.addEventListener("submit", (event) => {
  // if(!isEditing){
    console.log("this is first event handler of save ${isEditing }");
    event.preventDefault();
    const question = document.getElementById("question").value;
    const answer = document.getElementById("answer").value;
    notes.push({ question, answer });
    displayNotes();
    formContainer.classList.add("hidden");
    questionForm.reset();
  // }
  });
// }

function displayNotes() {
  cardsContainer.innerHTML = "";
  notes.forEach((note, index) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
      <h3 id = "ques" >${note.question}</h3>
      <p class="answer hidden" id = "ans" >${note.answer}</p>
      <button class="editBtn" onclick=" editQuestion(${index}) ">Edit</button>
      <button class="deleteBtn" onclick="deleteNote(${index})">Delete</button>
      <button class="showHideBtn" onclick="showHideAnswer(${index})">Show/Hide Answer</button>
    `;
    cardsContainer.appendChild(card);
  });
}


function editQuestion(index) {
  isEditing = true;
  console.log(isEditing);
  const note = notes[index];
  //japman will access through local storage  

  document.getElementById("question").value = note.question;
  document.getElementById("answer").value = note.answer;
  formContainer.classList.remove("hidden");
  deleteNote(index) // this is required to delete old note
  // document.getElementById("submitBtn").classList.add("hidden")
  // we can't simply use prev save button as that'll also call prev eventlistener
  // that's why prev save button is given hidden class

  // console.log(notes);
  // questionForm.onsubmit = function (event) {
  //   event.preventDefault();
  //   notes[index].question = document.getElementById("question").value;
  //   notes[index].answer = document.getElementById("answer").value;
  //   console.log(notes);
  //   displayNotes();
  //   formContainer.classList.add("hidden");
  //   questionForm.reset();
  //   deleteNote(index);
  // };
}

function showHideAnswer(index) {
  console.log(cardsContainer);
  console.log(cardsContainer.children[index]);
  const ansToHide = cardsContainer.children[index].querySelector("#ans");
  ansToHide.classList.toggle("hidden")
  
}

function deleteNote(index) {
  notes.splice(index, 1);
  displayNotes();
}
