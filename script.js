const circleBtn = document.querySelector("#circleBtn")
const mainSection = document.querySelector("#main")
const modal = document.querySelector(".modal")
const modalBtn = document.querySelector("#modalBtn")
const overlay = document.querySelector(".overlay")
const modalForm = document.querySelector(".modalForm")
const bookStorage = []

circleBtn.addEventListener("click", () => {
        modal.style.setProperty("scale", 1)
        overlay.style.setProperty("scale", 1)
})
overlay.addEventListener("click", () => {
        modal.style.setProperty("scale", 0)
        overlay.style.setProperty("scale", 0)
})
modalBtn.addEventListener("click", (event) => {
    event.preventDefault()
    modal.style.setProperty("scale", 0)
    overlay.style.setProperty("scale", 0)
    addBookToLibrary()
    createCards()
    modalForm.reset()
})

function Book(title, author, pages, isRead) {
    this.title = title
    this.author = author
    this.pages = pages
    this.isRead = isRead
    this.index = bookStorage.length
}

function isBookRead() {
    let r = document.querySelector("#bookRead").checked
    if (r) {
        return r
    }   else if (r === false){
        r = false
        return r
    }
}

function addBookToLibrary() {
    let t = document.querySelector("#bookTitle").value
    let a = document.querySelector("#bookAuthor").value
    let p = document.querySelector("#bookPages").value
    let x = new Book(t, a, p, isBookRead())
    bookStorage.push(x)
}

function createCards() {
    resetMainSection()
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
        if (key.isRead === true) {
            buttonOne.classList.add("readActive")
            buttonOne.innerHTML = "Read"
        } else if (key.isRead === false) {
            buttonOne.classList.add("readNotactive")
            buttonOne.innerHTML = "Not Read"
        }
        checkBoxContainer.appendChild(buttonOne)
    
    
        const buttonTwo = document.createElement("button")
        buttonTwo.classList.add("deleteBtn")
        buttonTwo.textContent = "Remove"
        checkBoxContainer.appendChild(buttonTwo)
    
        buttonTwo.addEventListener("click", () => {
            buttonTwo.closest(".card").remove()
            bookStorage.splice(key.index, 1)
        
    })
        
        buttonOne.addEventListener("click", () => {
            if (key.isRead === true) {
                buttonOne.classList.remove("readActive")
                buttonOne.classList.add("readNotactive")
                buttonOne.innerHTML = "Not read"
                key.isRead = false
            } else if (key.isRead === false) {
                buttonOne.classList.add("readActive")
                buttonOne.classList.remove("readNotactive")
                buttonOne.innerHTML = "Read"
                key.isRead = true
            }
        })
    }       
}

function resetMainSection() {
    mainSection.innerHTML = ""
}