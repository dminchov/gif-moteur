const apiKey = "ZH0Z2HlUNVTcrG7Eas7lJUMjiBh4TggH"; 
const searchEndpoint = "https://api.giphy.com/v1/gifs/search";
const stickerEndpoint = "https://api.giphy.com/v1/stickers/search";

const gifBtn = document.getElementById("gif-btn");
const stickerBtn = document.getElementById("sticker-btn");
const resultsDiv = document.getElementById("results");
const searchBox = document.getElementById("search-box");

function searchGiphy(endpoint, query) {
  const url = `${endpoint}?api_key=${apiKey}&q=${query}&limit=5`;
  fetch(url)
    .then(response => response.json())
    .then(data => {
      resultsDiv.innerHTML = "";
      data.data.forEach(item => {
        const img = document.createElement("img");
        img.src = item.images.original.url;
        resultsDiv.appendChild(img);
      });
    })
    .catch(error => console.error(error));
}

gifBtn.addEventListener("click", () => {
  const query = searchBox.value;
  searchGiphy(searchEndpoint, query);
});

stickerBtn.addEventListener("click", () => {
  const query = searchBox.value;
  searchGiphy(stickerEndpoint, query);
});


