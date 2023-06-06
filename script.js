const circleBtn = document.querySelector("#circleBtn");
const mainSection = document.querySelector("#main");
const modal = document.querySelector(".modal");
const modalBtn = document.querySelector("#modalBtn");

const bookStorage = []

circleBtn.addEventListener("click", () => modal.style.setProperty("scale", 1))

modalBtn.addEventListener("click", (event) => {
    modal.style.setProperty("scale", 0);
    event.preventDefault();
    addBookToLibrary();
    displayBook();
    resetInputs();
})

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.index = 0;
}

function addBookToLibrary() {
    let t = document.querySelector("#bookTitle").value
    let a = document.querySelector("#bookAuthor").value
    let p = document.querySelector("#bookPages").value
    let r = document.querySelector("#bookRead").value
    var x = new Book(t, a, p, r);
    bookStorage.push(x);
}

function displayBook() {
    mainSection.innerHTML = "";
    for (const y of bookStorage) {
        y.index += 1
        let arr = `
            <div class="card">
                <h3 class="heading">${y.title}</h3>
                <p class="text">Author: ${y.author}</p>
                <p class="text">Number of pages: ${y.pages}</p>
                <p class="text">Did you read the book? ${y.read}</p>
                <div>
                    <button class="${y.index}" id="readBtn" type="button">READ</button>
                    <button class="${y.index}" id="exitBtn" type="button">REMOVE</button>
                </div>
            </div>`
        mainSection.innerHTML += arr
    }
}

function resetInputs() {
    document.querySelector("#bookTitle").value = "";
    document.querySelector("#bookAuthor").value = "";
    document.querySelector("#bookPages").value = "";
    document.querySelector("#bookRead").value = "";
}
