// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {
    
    const parent = document.querySelector(".header-container")
    const headerDiv = createAndAppend("div", parent, {class: "header"})

    createAndAppend("span", headerDiv, {class: "date", textContent: "SMARCH 28, 2019"})
    createAndAppend("h1", headerDiv, {textContent: "Lambda Times"})
    createAndAppend("span", headerDiv, {class: "temp", textContent: "98°"})

    return headerDiv

}

Header()