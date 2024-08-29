console.log("Hello world");

const myBoard = document.querySelector(".myBoard");
const myButton = document.querySelector(".myButton");
let SQUARE_NUM = 16;
const BOARD_SIZE = 550; //width and height of myBoard element (css)

myButton.addEventListener("click", () => {
  const newSquareNum = parseInt(prompt("New Board Size? (Limit: 100)"));

  if (!isNaN(newSquareNum)) {
    removeBoard();
    if (newSquareNum > 100) {
      SQUARE_NUM = 100;
    } else {
      SQUARE_NUM = newSquareNum;
    }
    createBoard(SQUARE_NUM);
  }

  return;
});

const createBoard = (square) => {
  for (let i = 0; i < square; i++) {
    const myBoardItem = document.createElement("div");
    myBoardItem.classList.add("myBoardItem");
    // Create square
    for (let j = 0; j < square; j++) {
      const myBoardItemChild = document.createElement("div");
      myBoardItemChild.style.height = `${BOARD_SIZE / square}px`;
      myBoardItemChild.style.width = `${BOARD_SIZE / square}px`;

      // drawing logic
      myBoardItemChild.addEventListener("mouseenter", () => {
        myBoardItemChild.style.backgroundColor = "black";
      });

      myBoardItem.appendChild(myBoardItemChild);
    }

    myBoard.appendChild(myBoardItem);
  }

  return;
};

// Remove all elements before creating a new one
const removeBoard = () => {
  while (myBoard.lastElementChild) {
    myBoard.removeChild(myBoard.lastElementChild);
  }
};

createBoard(SQUARE_NUM);
