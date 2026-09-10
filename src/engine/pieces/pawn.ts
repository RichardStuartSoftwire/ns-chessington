import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from '../square';

export default class Pawn extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        const thisPawnSquare: Square = board.findPiece(this);
        let moveNewRow: number =
            this.player === Player.WHITE ?
                thisPawnSquare.row + 1 :
                thisPawnSquare.row - 1;
        return [new Square(moveNewRow, thisPawnSquare.col)];
    }
}
