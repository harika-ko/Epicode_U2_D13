const options = {
    method: 'GET'
}

const loadBooks = async () => {
    const response = await fetch("https://striveschool-api.herokuapp.com/books", options)
    const bookList = await response.json()
    console.log(bookList)

    booksArr = [...bookList]

    const row = document.querySelector(".container > .row")

    bookList.forEach(book => {
        const col = document.createElement("div");
        col.className = "col-sm-6 col-md-4 col-lg-3"

        col.innerHTML = `
    <div class="card">
        <img src="${book.img}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${book.title}</h5>
                <p class="card-text">${book.category} | ASIN: ${book.asin}</p>
                <a href="#" class="btn btn-primary">Add to cart</a>
                <a href="#" class="btn btn-primary">Skip</a>
            </div>
    </div>`

        row.appendChild(col)
    });
}

window.onload = () => {
    loadBooks()
}

