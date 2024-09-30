type SquareColor = "white" | "black";   //ensures only white and black colors are supported

interface Square {
  color: SquareColor;   //represent single color
}

class Chessboard {
  private squares: Square[][];    //holds the 8by8 grid of squares

  constructor() {
    this.squares = this.createBoard();   // initializes the board by creating board structure
  }

  //generate grid with alternating colors
  private createBoard(): Square[][] {   
    const board: Square[][] = [];

    for (let row = 0; row < 8; row++) {
      const currentRow: Square[] = [];

      for (let col = 0; col < 8; col++) {
        const color: SquareColor = (row + col) % 2 === 0 ? "black" : "white";
        currentRow.push({ color });
      }
      board.push(currentRow);
    }
    return board;
  }

  // Now drawing a chessboard

  public drawChessboard(Canvas: HTMLCanvasElement) {
    const context = Canvas.getContext("2d");
    if (!context) return;

    const squareSize = Canvas.width / 8;
    for (let row = 0; row < 8; row++) {
      for (let column = 0; column < 8; column++) {
        context.fillStyle = this.squares[row][column].color;
        context.fillRect(
          column * squareSize,
          row * squareSize,
          squareSize,
          squareSize
        );
      }
    }
  }
}
const canvas = document.getElementById("chessboard") as HTMLCanvasElement;
const chessBoard = new Chessboard();
chessBoard.drawChessboard(canvas)