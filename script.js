console.log("Welcome to notes app. This is app.js");
showNotes();

// If user adds a note, add it to the localStorage
  let addBtn = document.getElementById("addBtn");
  let addTxt = document.getElementById("addTxt");
  let title =  document.getElementById("MyTitle");
  let taskDate = document.getElementById("task-date");
  addBtn.addEventListener("click", function(e) {
	  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
      
    notesObj = JSON.parse(notes); 
  }
  let myObj = {
    title: MyTitle.value,
    text: addTxt.value,
    textone: taskDate.value
  }
  notesObj.push(myObj);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  addTxt.value = "";
  MyTitle.value = "";
  taskDate.value = "";
//   console.log(notesObj);
  showNotes();
});
// Function to show elements from localStorage
function showNotes() {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let html = "";
  notesObj.forEach(function(element, index) {
    html += `<div id="note" class="noteCard">
             <h3 class="note-title">${element.title}</h3>
             <p class="note-text"> ${element.text}</p>
             <p class="card-textone">${element.textone}</p>
             <button id="${index}"onclick="deleteNote(this.id)" class="btn btn-primary" id="addBtn">Delete Note</button>
			        <button id="${index}"onclick="editNote(this.id)" class="btn btn-primary" id="addBtn" >Edit Note</button>
                </div> `;
  });
  let notesElm = document.getElementById("notes");
  if (notesObj.length != 0) {
    notesElm.innerHTML = html
	} else {
    notesElm.innerHTML = `Nothing to show! Use "Add a Note" section above to add notes.`;
  }
  
}
// Function to delete a note
function deleteNote(index) {
//   console.log("I am deleting", index);

  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }

  notesObj.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  showNotes();
}

//function to edit a note
function editNote(index) {
  //   console.log("I am deleting", index);
  
    let notes = localStorage.getItem("notes");
    if (notes == null) {
      notesObj = [];
    } else {
      notesObj = JSON.parse(notes);
    }
  
    notesObj.findIndex((element,index)=> {
		MyTitle.value = element.title;
		addTxt.value = element.text;
		
	})
	notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
  }
  let explore = document.getElementById('searchTxt');
explore.addEventListener("input", function(){

    let inputVal = explore.value.toLowerCase();
    // console.log('Input event fired!', inputVal);
    let noteCards = document.getElementsByClassName('noteCard');
    Array.from(noteCards).forEach(function(element){
        
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        console.log(cardTxt);
        if(cardTxt.includes(inputVal)){
            element.style.display = "block";
        }
        else{
            element.style.display = "none";
        }
        // console.log(cardTxt);
    });
});
