let quotes = [
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab enim asperiores quidem?",
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem animi similique praesentium velit.",
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem sequi optio rem distinctio odit voluptatem?",
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus, rem!",
  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius, temporibus provident in blanditiis non iusto. Voluptatibus dolor eaque iusto nisi?",
  "Lorem ipsum dolor sit amet.",
  "Lorem, ipsum.",
];

function quoteQenerate() {
  let randomNum = Math.floor(Math.random() * quotes.length);

  let quoteText = document.getElementById("quoteText");

  quoteText.style.display = "block";

  quoteText.textContent = quotes[randomNum];
}
