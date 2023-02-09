// let arr = document.querySelector("#button1");
// let arr1 = document.querySelectorAll("p");
// arr.addEventListener("click", () => {
//   for (i of arr1) {
//     i.style.backgrounColor = "coral";
//   }
// });

// let button = document.querySelector("#button1");
// let h2 = document.querySelectorAll("h2");
// button.addEventListener("click", () => {
//   for (i of h2) {
//     i.innerText = "Diana";
//   }
// });

// let button = document.querySelector("#button1");
// let hka = document.querySelectorAll(".falceFact");
// arr.addEventListener("click", () => {
//   hka.forEach((a) => (a.innerText = "True Fact"));
// });

// let button = document.querySelector("#button2");
// let hka = document.querySelector("body");
// button.addEventListener("click", () => {
//   hka.style.backgroundColor = "pink";
// });

// document.getElementById("button2").onclick = function () {
//     let headings = document.querySelectorAll("h2");
//     for (let heading of headings) {
//       heading.style.color = "green";
//     }
//   };

// document.getElementById("button2").onclick = function () {
//   let block = document.querySelector("blockquote");
//   block.InnerHTML = "<span>no quote</span>";
// };

/** 7
 При нажатии на кнопку 3, поменяйте текст h1 на 'DOM is easy'.
 */
//  document.querySelector("#button3").onclick = () => {
//     document.querySelector("h1").innerText = "DOM is easy";
//   };

/** 9
 * При нажатии на кнопку 3, поменяйте цвет текста параграфов на красный
 и шрифт на georgia
 */
// document.getElementById("button3").addEventListener("click", function () {
//   let paragraphs = document.querySelectorAll("p");
//   for (let i = 0; i < paragraphs.length; i++) {
//     paragraphs[i].style.color = "red";
//     paragraphs[i].style.fontFamily = "georgia";
//   }
// });

const button = document.querySelector("#btn");
const button2 = document.querySelector("#btn2");
const body = document.querySelector(".board");

function random() {
  return Math.floor(Math.random() * 80);
}

button.addEventListener("click", () => {
  let top = random() + "%";
  let left = random() + "%";
  button.style.top = top;
  button.style.left = left;
});

// button.addEventListener("click", () => {
//   alert("You won! You are not a gay");
//   body.style.background = "pink";
// });
button2.addEventListener("click", () => {
  alert("Congratulations!!! You are gay");
  body.style.background = "blue";
});

// let select = document.querySelector("select");
// let body = document.querySelector("body");
// select.addEventListener("change", function (e) {
//   const n = e.target.value;
//   body.style.background = n;
//   console.log(n);
// });
