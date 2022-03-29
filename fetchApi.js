// Official documentation: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

// For this example I'm going to append the response of the API to the body of the page.
// To that effect, I have to query the element on the page that I want to append the response to.
const imageElement = document.querySelector("#content");
const paragraphElement = document.querySelector("#description");

// This is the button that is going to initiate the request.
const requestButton = document.querySelector('#makeRequest');
requestButton.addEventListener("click", () => {
  fetch("https://api.chucknorris.io/jokes/random")
    .then(response => response.json())
    .then(data => {
      console.log(data);
      requestButton.innerHTML = "Make another AJAX request";
      imageElement.src = data.icon_url;
      paragraphElement.innerHTML = data.value;
    });
});