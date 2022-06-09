const options = {
    method: 'GET'
}

const loadBooks = async () => {
    const response = await fetch("https://striveschool-api.herokuapp.com/books", options)
    const bookList = await response.json()
    console.log(bookList)

    booksArr = [...bookList]

    const row = document.querySelector(".container-1 > .row-1")

    bookList.forEach(book => {
        const col = document.createElement("div");
        col.className = "col-sm-6 col-md-4 col-lg-3"

        col.innerHTML = `
                <div class="card">
                    <img src="${book.img}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${book.title}</h5>
                <p class="card-text">${book.category}</p>
                <a href="#" class="btn btn-primary" onclick="addClickFunction(event)">Add to cart</a>
                <a href="#" class="btn btn-primary" onclick="removeBook(event)">Skip</a>
            </div>
    </div>`

        row.appendChild(col)
    });
}

let clickNum = 0;

const addClickFunction = (event) => {
    let clickedBook = event.target.closest(".card").querySelector("h5").innerHTML
    console.log(clickedBook)

    let image = event.target.closest(".card").querySelector("img")
    console.log(image)

    const row2 = document.querySelector(".row-2 > .col-md-4")

    row2.innerHTML = `<div class="card">
    <img src="${image.src}" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">${clickedBook}</h5>
    </div>
        </div>`

    clickNum += 1
    document.querySelector(".cart-num").innerHTML = clickNum;

    const card1 = event.target.parentElement
    card1.classList.toggle("clicked-card")
}

const removeBook = (event) => {
    event.target.closest(".card").remove()
}

window.onload = () => {
    loadBooks()
}

