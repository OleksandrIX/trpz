function ChessBoard(width, height) {
    this.height = height;
    this.width = width;

    this.drawBoard = () => {
        let board = '';

        const blackSymbol = ' # ',
            whiteSymbol = ' @ ';

        for (let i = this.height; i >= 1; i--) {
            let rowBoard = i + ' ';
            for (let j = 1; j <= this.width; j++) {
                if ((i + j) % 2 !== 0) {
                    rowBoard += blackSymbol;
                } else {
                    rowBoard += whiteSymbol;
                }
            }
            board += rowBoard + '\n';
        }
        board += "  ";
        for (let i = 1; i <= this.width; i++) {
            board += ' ' + String.fromCharCode(64 + i) + ' ';
        }
        console.log(board)
    }
}

const chessBoard8x8 = new ChessBoard(8, 8);
chessBoard8x8.drawBoard();

console.log('\n\n');

const chessBoard16x16 = new ChessBoard(16, 16);
chessBoard16x16.drawBoard();

console.log('\n\n');

const chessBoard9x9 = new ChessBoard(9, 9);
chessBoard9x9.drawBoard();