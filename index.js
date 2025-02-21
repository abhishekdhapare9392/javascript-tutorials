let titleInput = document.querySelector("#note-title");
let saveButton = document.querySelector("#save-note");
let notesContainer = document.querySelector("#notes");

saveButton.addEventListener("click", () => {
  //   console.log(titleInput.value);
  let cardTitle = titleInput.value;
  if (cardTitle == "") {
    document.querySelector("#error").style.display = "block";
    document.querySelector("#error").innerText = "Please Enter Note Title";
    setTimeout(() => {
      document.querySelector("#error").style.display = "none";
    }, 5000);
    return;
  }

  // let cardTitleList = document.cookie.split("=")[1];  // --- Cookies - get cookie
  let cardTitleList = localStorage.getItem("notes");   // Local storage - get item from local storage
  if (cardTitleList == null) {
    cardTitleList = [
      {
        title: cardTitle,
      },
    ];
  } else {
    cardTitleList = JSON.parse(cardTitleList);
    cardTitleList.push({
      title: cardTitle,
    });
  }

  // document.cookie = "notes=" + JSON.stringify(cardTitleList); // --- Cookies - set cookie
  localStorage.setItem("notes", JSON.stringify(cardTitleList)); // Local storage - set item in local storage
  let noteCard = `
          <div class="card w-96 shadow-lg p-4 mt-2">
              <div class="card-body flex flex-row justify-between items-center gap-2">
                  <h2 class="card-title">${cardTitle}</h2>
                  <i class="fa-solid fa-trash text-red-600 delete-note"></i>
              </div>
          </div>
          `;
  notesContainer.innerHTML += noteCard;

  let cards = document.querySelectorAll(".card");
  if (cards.length > 0 && notesContainer.firstChild.tagName == "H1") {
    notesContainer.firstChild.remove();
  }
  //   let div = document.createElement("div");
  //   div.classList.add("card", "w-96", "shadow-lg", "p-4", "mt-2");
  //   let divBody = document.createElement("div");
  //   divBody.classList.add("card-body");
  //   let h2 = document.createElement("h2");
  //   h2.classList.add("card-title");
  //   h2.innerText = cardTitle;
  //   divBody.appendChild(h2);
  //   div.appendChild(divBody);
  //   notesContainer.appendChild(div);

  titleInput.value = "";
});

notesContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete-note")) {
    e.target.parentElement.parentElement.remove();
    // let cardTitle = document.cookie.split("=")[1]; // --- Cookies - get cookie
    let cardTitle = localStorage.getItem("notes"); // Local storage - get item from local storage
    cardTitle = JSON.parse(cardTitle);
    cardTitle.forEach((element, index) => {
      // console.log(e.target.previousElementSibling.innerText);  
      if (element.title == e.target.previousElementSibling.innerText) {
        cardTitle.splice(index, 1);
        // document.cookie = "notes=" + JSON.stringify(cardTitle); // --- Cookies - set cookie
         localStorage.setItem("notes", JSON.stringify(cardTitle)); // Local storage - set item in local storage
      }
    });
    // console.log(e.target.parentElement.parentElement);
  }
});

document.addEventListener("DOMContentLoaded", () => {
  let cards = document.querySelectorAll(".card");
  //   console.log(cards.length);
  if (cards.length === 0) {
    notesContainer.innerHTML = "<h1 class='text-2xl '>No Notes Available</h1>";
  }

  // console.log(document.cookie);
  // let cardTitle = document.cookie.split("=")[1];
  let cardTitle = localStorage.getItem("notes");
  if (cardTitle != null) {
    // console.log("ddd");
    cardTitle = JSON.parse(cardTitle);
    console.log(cardTitle);
    cardTitle.forEach((element) => {
      let noteCard = `
          <div class="card w-96 shadow-lg p-4 mt-2">
              <div class="card-body flex flex-row justify-between items-center gap-2">
                  <h2 class="card-title">${element.title}</h2>
                  <i class="fa-solid fa-trash text-red-600 delete-note"></i>
              </div>
          </div>
          `;
      notesContainer.innerHTML += noteCard;
    });
  }
});
