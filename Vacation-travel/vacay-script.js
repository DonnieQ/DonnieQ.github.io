
document.getElementById("pleaseWork").onclick=myFunction;

document.getElementById("pleaseWork").addEventListener("submit", function (evt) {
    evt.preventDefault();
    console.log("Good Job");
    evt.createElement("p");

    });
    // let newP = document.createElement("p");
    // newP.addEventListener("submit",function(evt) {
    //     alert(evt.target.innerHTML)
    // });
    // newP.innerHTML = myFunction;











// function createRandomQuote() {
//     let randomQuote = pickRandomQuote(inspirationalQuotes);  // setting variable randomQuote to function pickRandomQuote and paissing in array of insperational quotes
  
//     let newP = document.createElement("p"); // using var newP as the var for creating new p elements
//     newP.addEventListener("submit", function(evt) {
//       alert(evt.target.innerHTML)
//     });
//     newP.innerHTML = randomQuote; // letting the function random quote supply my new p's with a randome quote
  
//     document.getElementById("quotes_container").prepend(newP); // adding the new quotes to the top of the div
//     newP.style.backgroundColor = getRandomHexColor(); // changing the background color of the new p element
  
  function myFunction() {
    var x = document.createElement("IMG");
    x.setAttribute("src", "thewolf.jpg");
    x.setAttribute("width", "304");
    x.setAttribute("height", "228");
    x.setAttribute("alt", "The Pulpit Rock");
    document.body.appendChild(x);
  }