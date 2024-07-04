const books =[
    {title: "bookOne", genre:"History",  pulishion: 2000, edition: 2014},

    {title:"bookTwo", genre:"Science",  pulishion: 1895, edition: 2008},

    {title:"booksThree", genre:"Science",  pulishion: 1998, edition: 2009}   
]

let userBooks = books.filter(( bk ) => bk.genre === "Science" && bk.pulishion > 1895)

console.log(userBooks)