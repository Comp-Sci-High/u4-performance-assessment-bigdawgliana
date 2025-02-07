//https://chatgpt.com/share/67a03624-cb2c-800f-8c90-7d6bb2ea2648
// Task 1: Set up folders and move your files
const express = require('express')
const app = express()

const inventory = [
  {
    category: "favorites",
    items: [
      {
        name: "It Ends with Us",
        rating: '⭐⭐⭐⭐',
        path: '/0',
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ_LJYfL1EsiycSNulq19guoxSCMr6PTAXLaCMKY3xAjL56pZ3",
        description: "This is a great product that offers high-quality features and performance. Perfect for everyday use."
    },
    {
        name: "Night Agent",
        rating: '⭐⭐⭐⭐',
        path: '/1',
        image: "https://resizing.flixster.com/hertkw4AKx4FrF90z1TQWpYYFtE=/ems.cHJkLWVtcy1hc3NldHMvdHZzZWFzb24vZGIyM2RkMzktNDQ5My00ZDZhLWE1ZTYtNGNlYjBlNjVjYTRkLmpwZw==",
        description: "A solid product with good value for the price. While not perfect, it gets the job done with ease."
    },
    {
        name: "Take Care",
        rating: '⭐⭐⭐⭐⭐',
        path: '/2',
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLo_4cMOvdksTzQwXyY-13EMTbhWAQP4eDcw&s",
        description: "An exceptional product with top-tier quality. Highly recommended for those looking for the best."
     }
    ]
  },
  
]

// Task 1: Set the view engine to EJS. 
app.set('view engine', 'ejs')


app.use((req, res, next) => {
  console.log(req.method + " " + req.path)
  next()
})

// Task 1: Set up the static middleware

app.use(express.static(__dirname + '/public'))


// Task 2: Set up the route handler for / to send back the index.html file

app.get("/", (request, response)=> {
  res.render("index.html")
})

// Task 3: Set up the route handler for /mens which sends back category.ejs with the men's category object
app.get("/about", (request, response) => {
  response.render("about.ejs", inventory[0])  
})


// Task 4: Plug in the values in category.ejs to get the page working
// PINK ONLY: Set up a route handler for /womens to pass in similar data for women's

app.get("/0", (request, response)=> {
  // const path = request.params.path
  response.render("more.ejs", inventory[0].items[0])
})

// Task 5: Set up the route handler for /item/0 which sends back the first item in product.ejs


// Task 6: Plug in the values in product.ejs to get the page working
// Extra credit: modify the /item/0 route handler to have dynamic path parameter and return any item's data

app.listen(3000, () => {
  console.log("Server running")
})