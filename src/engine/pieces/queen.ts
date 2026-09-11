import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from '../square';
import GameSettings from '../gameSettings';

export default class Queen extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        const thisQueenSquare: Square = board.findPiece(this);
        const availableMoves: Square[] = [];

        const directions = [
            { rowStep: 0, colStep: +1 },
            { rowStep: 0, colStep: -1 },
            { rowStep: +1, colStep: 0 },
            { rowStep: -1, colStep: 0 },
            { rowStep: +1, colStep: +1 },
            { rowStep: +1, colStep: -1 },
            { rowStep: -1, colStep: +1 },
            { rowStep: -1, colStep: -1 },
        ];

        for (const { rowStep, colStep } of directions) {
            let row = thisQueenSquare.row + rowStep;
            let col = thisQueenSquare.col + colStep;

            while (row >= 0 && row < GameSettings.BOARD_SIZE && col >= 0 && col < GameSettings.BOARD_SIZE) {
                availableMoves.push(Square.at(row, col));
                row += rowStep;
                col += colStep;
            }
        }

        return availableMoves;
    }
}
