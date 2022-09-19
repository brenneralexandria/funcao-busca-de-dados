
    const booksByCategory = [
        {
            category: "Riqueza",
            books: [
                {
                    title: "Os segredos da mente milionaria",
                    author: "F.Marv Eker",
                },
                {
                    title: "O homem mais rico da babilônia",
                    author: "Gerge S. Classon",
                },
                {
                    title: "Pai rico, pai pobre",
                    author: "Robert T.Kiyosaki e Sharon L. Lechter",
                },
            ],
        },
        {
            category: 'Inteligencia Emocional',
            books: [
                {
                  title: 'Você é insubstituivel',
                  author: 'Augusto Cury',
                },
                {
                    title: 'Ansiedade - Como enfrentar o mal do século',
                    author: 'Augusto Cury',
                },
                {
                    title: 'Os 7 hábitos das pessoas altamente eficazes',
                    author: 'Ste´phen R. Covey',
                },
            ],
        },
    ];

const totalCategories = booksByCategory.length

console.log(totalCategories);
for(let category of booksByCategory) {
    console.log('Total de livros da categoria: ', category.category)
    console.log(category.books.length)
}

function countAuthors() {
    let authors = [];

    for(let category of booksByCategory) {
        for(let book of category.books) {
            if(authors.indexOf(book.author) == -1) {
            authors.push(book.author);
            }
        }
    }

    console.log('Total de autores', authors.length);
}
countAuthors();

function bookesOfAuthor(author) {
    let books = [];

    for(let category of booksByCategory) {
        for(let book of category.books) {
            if(book.author === author) {
                books.push(book.title)
            }
        }
    }

    console.log(`Livros do autor ${author}: ${books.join(", ")}`)
}
bookesOfAuthor('Augusto Cury');