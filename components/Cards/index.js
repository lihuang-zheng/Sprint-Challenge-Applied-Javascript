// import { create } from "domain";
// import { CompositeDisposable } from "rx";

// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

// Create a heading to show which articles are being displayed right now
let cardsContainer = document.querySelector(".cards-container")
let h2 = document.createElement("h2")
h2.textContent = "Showing All Articles"
h2.classList.add("displayedArticlesStatus")

document.body.insertBefore(h2, cardsContainer)

// Get and display each card
axios.get("https://lambda-times-backend.herokuapp.com/articles")
     .then(response => {

        let articles = response.data.articles;

        // get all articles of a certain type: Javascript, Bootstrap, etc.
        for (articleType in articles)
        {
            let articlesCollection = articles[articleType]

            for (article of articlesCollection)
                {
                    createCard(article, articleType)
                }
        }
     })
     .catch(error => {
         console.log("There was an error getting the articles:", error)
     })

function createCard(data, articleType)
{
    let parent = document.querySelector(".cards-container")
    let card = createAndAppend("div", parent, {class: "card " + articleType})

    let headline = createAndAppend("div", card, {class: "headline", textContent: data.headline})
    let author = createAndAppend("div", card, {class: "author"})
    let imgContainer = createAndAppend("div", author, {class: "img-container"})
    let img = createAndAppend("img", imgContainer, {src: data.authorPhoto})
    let span = createAndAppend("span", author, {textContent: data.authorName})
    
    return card

}