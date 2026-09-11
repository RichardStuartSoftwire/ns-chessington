import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from '../square';
import GameSettings from '../gameSettings';

export default class Rook extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        const thisRookSquare: Square = board.findPiece(this);
        const availableMoves: Square[] = [];

        for (let row = 0; row < GameSettings.BOARD_SIZE; row++) {
            if (row !== thisRookSquare.row) {
                availableMoves.push(Square.at(row, thisRookSquare.col));
            }
        }

        for (let col = 0; col < GameSettings.BOARD_SIZE; col++) {
            if (col !== thisRookSquare.col) {
                availableMoves.push(Square.at(thisRookSquare.row, col));
            }
        }

        return availableMoves;
    }
}
