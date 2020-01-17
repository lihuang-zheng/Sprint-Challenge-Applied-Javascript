// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

axios.get("https://lambda-times-backend.herokuapp.com/topics")
     .then(response => {

        const parent = document.querySelector(".topics")

        for (topic of response.data.topics) {
                const topicClass = topic
                if (topic === "node.js")
                    { topicClass = "node" }

                const tab = createAndAppend("div", parent, {class: "tab", textContent: topic, onclick: "showOnly('" + topicClass + "')"})
        }
        
        createAndAppend("div", parent, {class: "tab", textContent: "Show All", onclick: "showAll()"})
             
     })
     .catch(error => {
         console.log("error getting topics:", error)
     })

// Show only Function
function showOnly(topicToShow) {
    const allArticles = document.querySelectorAll(".card")

    for (article of allArticles) {
        // hide all articles first
        article.classList.add("hidden")

        // show only the desired articles
        if (article.classList.contains(topicToShow)) {
            article.classList.toggle("hidden")
        }

    }

    const articleStatus = document.querySelector(".displayedArticlesStatus")
    articleStatus.textContent = "Showing only " + topicToShow[0].toUpperCase() + topicToShow.slice(1) + " articles"
}

// Show All Function
function showAll() {
    const allArticles = document.querySelectorAll(".card")

    for (article of allArticles) {
        article.classList.remove("hidden")
    }

    const articleStatus = document.querySelector(".displayedArticlesStatus")
    articleStatus.textContent = "Showing all articles"
}