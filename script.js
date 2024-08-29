console.log("Hello world");

const myBoard = document.querySelector(".myBoard");
const myButton = document.querySelector(".myButton");
let SQUARE_NUM = 5;
let BOARD_SIZE = 550;
// myButton.addEventListener("click", (e) => {});

// Create board size
for (let i = 0; i < SQUARE_NUM; i++) {
  const myBoardItem = document.createElement("div");
  myBoardItem.classList.add("myBoardItem");
  // Create square
  for (let j = 0; j < SQUARE_NUM; j++) {
    const myBoardItemChild = document.createElement("div");
    myBoardItemChild.classList.add("myBoardItemChild");
    myBoardItemChild.style.height = `${BOARD_SIZE / SQUARE_NUM}px`;
    myBoardItemChild.style.width = `${BOARD_SIZE / SQUARE_NUM}px`;
    myBoardItem.appendChild(myBoardItemChild);
  }

  myBoard.appendChild(myBoardItem);
}
