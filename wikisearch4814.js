let searchInput = document.getElementById("searchInput")
let searchResults = document.getElementById("searchResults")
searchInput.addEventListener("keydown", function(e) {
    if (e.key == "Enter") {
        let searchUrl = "https://apis.ccbp.in/wiki-search?search=" + searchInput.value
        options = {
            method: "GET",
        }
        fetch(searchUrl, options).then(function(response) {
            return response.json()
        }).then(function(jsonData) {
            for (var item of jsonData.search_results) {
                console.log(item)
                appendChildToParent(item)
            }
        })
    }
})

function appendChildToParent(item) {
    var searchDiv = document.createElement("div")
    var anchorEle = document.createElement("a")
    anchorEle.textContent = item.title
    anchorEle.href = item.link
    searchDiv.appendChild(anchorEle)
    var linkEle = document.createElement("p")
    linkEle.classList.add("green")
    linkEle.textContent = item.link
    searchDiv.appendChild(linkEle)
    var paragraphEle = document.createElement("p")
    paragraphEle.textContent = item.description
    searchDiv.appendChild(paragraphEle)
    searchResults.appendChild(searchDiv)
}