import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from '../square';
import GameSettings from '../gameSettings';

export default class Bishop extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        const thisBishopSquare: Square = board.findPiece(this);
        const availableMoves: Square[] = [];

        const directions = [
            { rowStep: +1, colStep: +1 },
            { rowStep: +1, colStep: -1 },
            { rowStep: -1, colStep: +1 },
            { rowStep: -1, colStep: -1 },
        ];

        for (const { rowStep, colStep } of directions) {
            let row = thisBishopSquare.row + rowStep;
            let col = thisBishopSquare.col + colStep;

            while (row >= 0 && row < GameSettings.BOARD_SIZE && col >= 0 && col < GameSettings.BOARD_SIZE) {
                availableMoves.push(Square.at(row, col));
                row += rowStep;
                col += colStep;
            }
        }

        return availableMoves;
    }
}
