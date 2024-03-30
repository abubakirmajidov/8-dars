const h3EL = document.querySelector("h3");
const answersbtn = document.querySelectorAll(".btn");
const restartbtn = document.querySelector(".btn1");
const serchba = document.getElementsByClassName("serch");

let a = 0;
let isGameOver = false;
function generateNumber(to) {
  return Math.ceil(Math.random() * to);
}

generateNumber();

function startGame() {
  let num1 = generateNumber(100);
  let num2 = generateNumber(100);
  const result = num1 + num2;
  h3EL.textContent = `${num1} + ${num2} = ?`;
  const answers = [result - 2, result - 2, result + 1];

  answers[generateNumber(3) - 1] = result;

  answersbtn.forEach((btn, index) => {
    btn.textContent = answers[index];

    btn.addEventListener("click", () => {
      if (btn.textContent == result) {
        alert("Tog'ri");
      } else {
        alert("No'tog'ri");
      }
    });
  });
}

startGame();

restartbtn.addEventListener("click", startGame);
