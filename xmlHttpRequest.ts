// Official documentation: https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest

// For this example I'm going to append the response of the API to the body of the page.
// To that effect, I have to query the element on the page that I want to append the response to.
const XImageElement: HTMLImageElement = document.querySelector("#xcontent");
const XParagraphElement: HTMLParagraphElement = document.querySelector("#xdescription");

// This is the button that is going to initiate the request.
const XRequestButton = document.querySelector('#xmakeRequest');
XRequestButton.addEventListener("click", () => {
  // 3. Make the request
  xmlHttpRequestObject.send();
  XRequestButton.innerHTML = "Loading...";
});

// Using the XMLHttpRequest API
const xmlHttpRequestObject = new XMLHttpRequest();

// 1. Create a request using any HTTP method (POST, PUT, DELETE, GET, etc...)
// [] = optional
// .open(http method/verb, URL, if the request has to be asyncronous or not, [username, password])
xmlHttpRequestObject.open("GET", "https://api.chucknorris.io/jokes/random", true);

// 2. Add an event listener to get the response when the request is successful
xmlHttpRequestObject.addEventListener("load", (event) => {
  const parsedResponse = JSON.parse(xmlHttpRequestObject.response);
  console.log("XMLHttpRequest API", parsedResponse);

  XRequestButton.innerHTML = "Make another AJAX request";
  
  // the icon_url and value are properties of the response of the API. Check that out in the console to know what's inside the response.
  XImageElement.src = parsedResponse.icon_url;
  XParagraphElement.innerHTML = parsedResponse.value;
  
  // 4. Open the xmlHttpRequestObject again
  xmlHttpRequestObject.open("GET", "https://api.chucknorris.io/jokes/random", true);
});