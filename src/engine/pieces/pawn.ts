import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from '../square';
import GameSettings from '../gameSettings';

export default class Pawn extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        const thisPawnSquare: Square = board.findPiece(this);
        const availableMoves: Square[] = [];

        const topRow: number = GameSettings.BOARD_SIZE - 1;
        const originalStartRow: number = (this.player === Player.WHITE) ? 1 : topRow - 1;
        const moveRowOffset: number = (this.player === Player.WHITE) ? +1 : -1;
        
        const hasNotYetMoved: Boolean = (thisPawnSquare.row === originalStartRow);
                
        let moveNewRow: number = thisPawnSquare.row + moveRowOffset;
        availableMoves.push(new Square(moveNewRow, thisPawnSquare.col));
        
        if (hasNotYetMoved) {
            moveNewRow += moveRowOffset;
            availableMoves.push(new Square(moveNewRow, thisPawnSquare.col));
        }

        return availableMoves;
    }
}
