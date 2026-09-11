import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from '../square';
import GameSettings from '../gameSettings';

export default class Knight extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        const thisKnightSquare: Square = board.findPiece(this);
        const availableMoves: Square[] = [];

        const offsets = [
            { rowStep: +2, colStep: +1 },
            { rowStep: +2, colStep: -1 },
            { rowStep: -2, colStep: +1 },
            { rowStep: -2, colStep: -1 },
            { rowStep: +1, colStep: +2 },
            { rowStep: +1, colStep: -2 },
            { rowStep: -1, colStep: +2 },
            { rowStep: -1, colStep: -2 },
        ];

        for (const { rowStep, colStep } of offsets) {
            const row = thisKnightSquare.row + rowStep;
            const col = thisKnightSquare.col + colStep;

            if (row >= 0 && row < GameSettings.BOARD_SIZE && col >= 0 && col < GameSettings.BOARD_SIZE) {
                availableMoves.push(Square.at(row, col));
            }
        }

        return availableMoves;
    }
}
