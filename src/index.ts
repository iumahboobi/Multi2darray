type SquareColor = "white" | "black";

interface Square {
  color: SquareColor;
}

class Chessboard {
  private squares: Square[][];

  //create constructor
  constructor() {
    this.squares = this.createBoard();
  }

  public createBoard(): Square[][] {
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

  // Draw the chessboard on Canvas

  public draw(canvas: HTMLCanvasElement) {
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const squareSize = canvas.width / 8;

    for (let row = 0; row < 8; row++) {
      for (let col = 0; col < 8; col++) {
        ctx.fillStyle = this.squares[row][col].color;
        ctx.fillRect(
          col * squareSize,
          row * squareSize,
          squareSize,
          squareSize
        );
      }
    }
  }
}

// Get dom elements

const canvas = document.getElementById("chessboard");
const chessboard = new Chessboard();
//Draw Chessboard

chessboard.draw(canvas as HTMLCanvasElement);
