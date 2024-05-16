//8ball

//HTML variables
let btn = document.getElementById("8ballBtn");
let outputBox = document.getElementById("outputanswer");

//Event listener
btn.addEventListener("click", output);

function output() {
  let input = document.getElementById("inputquestion").value;
  input = input.toLowerCase();

  let answer = Math.random() * 5.2;
  console.log(answer);

  if (answer < 1) {
    outputBox.innerHTML = "Without a Doubt.";
  } else if (answer < 2) {
    outputBox.innerHTML = "As I see it, yes.";
  } else if (answer < 3) {
    outputBox.innerHTML = "Concentrate and ask again.";
  } else if (answer < 4) {
    outputBox.innerHTML = "Don't count on it.";
  } else if (answer < 5) {
    outputBox.innerHTML = "Outlook not so good.";
  }

  //Specific words
  if (
    input == "does a magic 8 ball actually work" ||
    input == "does a magic 8 ball work"
  ) {
    outputBox.innerHTML = "How dare you doubt me!";
  } else if (input == "is javascript awesome") {
    outputBox.innerHTML = "Of Course!";
  } else if (input.length == 0) {
    outputBox.innerHTML = "Please ask a question";
  }
}
