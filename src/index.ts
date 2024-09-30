type SquareColor = "white" | "black";

interface Square {
  color: SquareColor;
}

// create a class now
class ChessBoard {
  private squares: Square[][];

  constructor() {
    this.squares = this.createBoard();
  }

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

  // Render the board

  public drawBoard(Canvas: HTMLCanvasElement) {
    const context = Canvas.getContext("2d");
    if (!context) return;

    const squareSize = Canvas.width / 8;
    for (let row = 0; row < 8; row++) {
      for (let col = 0; col < 8; col++) {
        context.fillStyle = this.squares[row][col].color;
        context.fillRect(
          col * squareSize,
          row * squareSize,
          squareSize,
          squareSize
        );
      }
    }
  }
}


const canvas = document.getElementById("chessboard") as HTMLCanvasElement;
const chessboard = new ChessBoard();

chessboard.drawBoard(canvas);



/**
 * 
 * 
 * // Define a type for the chessboard squares
type SquareColor = "white" | "black";

// Interface representing a square on the chessboard
interface Square {
  color: SquareColor;
}

// Create a class for the chessboard
class ChessBoard {
  private squares: Square[][]; // Holds the 8x8 grid of squares

  constructor() {
    this.squares = this.createBoard(); // Initializes the board by creating board structure
  }

  // Generate grid with alternating colors
  private createBoard(): Square[][] {
    const board: Square[][] = []; // Initialize empty board array

    for (let row = 0; row < 8; row++) { // Loop through each row (0 to 7)
      const currentRow: Square[] = []; // Initialize empty row array

      for (let col = 0; col < 8; col++) { // Loop through each column (0 to 7)
        // Determine color based on position for alternating pattern
        const color: SquareColor = (row + col) % 2 === 0 ? "black" : "white";

        currentRow.push({ color }); // Add square with determined color to current row
      }
      board.push(currentRow); // Add completed row to the board
    }
    return board; // Return the complete 8x8 board
  }

  // Render the board on the canvas
  public drawBoard(Canvas: HTMLCanvasElement) {
    const context = Canvas.getContext("2d"); // Get 2D drawing context
    if (!context) return; // Exit if context is not available

    const squareSize = Canvas.width / 8; // Calculate size of each square (assuming square canvas)
    for (let row = 0; row < 8; row++) { // Loop through each row
      for (let col = 0; col < 8; col++) { // Loop through each column
        context.fillStyle = this.squares[row][col].color; // Set fill color for the square
        context.fillRect(
          col * squareSize, // X position
          row * squareSize, // Y position
          squareSize,       // Width of the square
          squareSize        // Height of the square
        ); // Draw the filled square on the canvas
      }
    }
  }
}

// Get the canvas element from the HTML document
const canvas = document.getElementById("chessboard") as HTMLCanvasElement;

// Create a new ChessBoard instance
const chessboard = new ChessBoard();

// Draw the chessboard on the retrieved canvas
chessboard.drawBoard(canvas);

 */