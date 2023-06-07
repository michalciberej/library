const circleBtn = document.querySelector("#circleBtn");
const mainSection = document.querySelector("#main");
const modal = document.querySelector(".modal");
const modalBtn = document.querySelector("#modalBtn");
const overlay = document.querySelector(".overlay");
const bookStorage = [{
    title: "retard",
    author: "retard",
    pages: "252",
    isRead: "read",
},{
    title: "retard",
    author: "retard",
    pages: "252",
    isRead: "read",
}];

circleBtn.addEventListener("click", () => {
        modal.style.setProperty("scale", 1);
        overlay.style.setProperty("scale", 1)
})
overlay.addEventListener("click", () => {
        modal.style.setProperty("scale", 0);
        overlay.style.setProperty("scale", 0)
})
modalBtn.addEventListener("click", (event) => {
    modal.style.setProperty("scale", 0);
    overlay.style.setProperty("scale", 0);
    event.preventDefault();
    addBookToLibrary();
    displayCards()
    resetInputs();
})

function Book(title, author, pages, isRead) {
    this.title = title;;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

function addBookToLibrary() {
    let t = document.querySelector("#bookTitle").value
    let a = document.querySelector("#bookAuthor").value
    let p = document.querySelector("#bookPages").value
    let r = document.querySelector("#bookRead").value
    let x = new Book(t, a, p, r);
    bookStorage.push(x);
    resetForm()
}

function resetForm() {
    document.querySelector("#bookTitle").value = "" 
    document.querySelector("#bookAuthor").value = ""
    document.querySelector("#bookPages").value = ""
    document.querySelector("#bookRead").value = ""
}

function displayCards() {
    for (const key of bookStorage) {
        
        const cardDiv = document.createElement("div");
        cardDiv.classList.add("card")
        mainSection.appendChild(cardDiv)


        const h3 = document.createElement("h3")
        h3.classList.add("heading")
        h3.textContent = `${key.title}`
        cardDiv.appendChild(h3)


        const p = document.createElement("p")
        p.classList.add("text")
        p.textContent = `${key.author}`
        cardDiv.appendChild(p)


        const pTwo = document.createElement("p")
        pTwo.classList.add("text")
        pTwo.textContent = `${key.pages}`
        cardDiv.appendChild(pTwo)

        let checkBoxContainer = document.createElement("div")
        checkBoxContainer.classList.add("checkboxContainer")
        cardDiv.appendChild(checkBoxContainer)

        const buttonOne = document.createElement("button")
        buttonOne.classList.add("readBtn")
        buttonOne.textContent = `${key.isRead}`
        checkBoxContainer.appendChild(buttonOne)

        const buttonTwo = document.createElement("button")
        buttonTwo.classList.add("deleteBtn")
        buttonTwo.textContent = "Remove"
        checkBoxContainer.appendChild(buttonTwo)

        }
        buttonTwo.addEventListener("click", () => {
            buttonTwo.closest(".card").remove() 
            
    })
    }

