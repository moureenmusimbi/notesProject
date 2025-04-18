//document.write("wellcome home");
//console.log("welcome home reen");
//alert("Wellcome");
//console.log("Hello"); 


//new work
//alert("Welcome to Reen");
//document.write("Welcome to GreatStack");
//console.log("JavaScript Tutorial");

const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");

// Show saved notes from localStorage on load
function showNotes() {
    notesContainer.innerHTML = localStorage.getItem("notes") || "";
}
showNotes();

// Update localStorage with current notes
function updateStorage() {
    localStorage.setItem("notes", notesContainer.innerHTML);
}

// Create a new note
createBtn.addEventListener("click", () => {
    let inputBox = document.createElement("p");
    let img = document.createElement("img");

    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "./delete.png";

    inputBox.appendChild(img);
    notesContainer.appendChild(inputBox);

    // Save new note to localStorage
    updateStorage();

    // Save changes when typing
    inputBox.onkeyup = function () {
        updateStorage();
    };
});

// Handle delete and typing in notes
notesContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        updateStorage();
    } else if (e.target.tagName === "P") {
        notes = document.querySelectorAll(".input-box");
        notes.forEach(nt => {
            nt.onkeyup = function () {
                updateStorage();
            };
        });
    }
});
