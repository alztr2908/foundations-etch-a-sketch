console.log("Hello world");

const myBoard = document.querySelector(".myBoard");

for (let i = 0; i < 10 * 10; i++) {
  const myBoardItem = document.createElement("div");
  myBoardItem.classList.add("myBoard-item");
  myBoard.appendChild(myBoardItem);
}
