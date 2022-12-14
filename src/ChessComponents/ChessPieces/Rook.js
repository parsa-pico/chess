import ChessPiece from "./ChessPiece";
import RookMarkup from "./Markups/Rook";
export default class Rook extends ChessPiece {
  constructor(id, location, color) {
    super(id, location, color, "rook", 5);
    this.markup = <RookMarkup id={id} color={color} />;
  }

  possibleWaysLogic(boardPieces) {
    let ways = [];

    for (let x = this.location.x - 1; x >= 0; x--) {
      const obstacle = boardPieces.find(
        (piece) =>
          piece.location.x === x && piece.location.y === this.location.y
      );
      if (!obstacle || obstacle.color !== this.color)
        ways.push({ x, y: this.location.y });
      if (obstacle) break;
    }
    for (let x = this.location.x + 1; x <= 7; x++) {
      const obstacle = boardPieces.find(
        (piece) =>
          piece.location.x === x && piece.location.y === this.location.y
      );
      if (!obstacle || obstacle.color !== this.color)
        ways.push({ x, y: this.location.y });
      if (obstacle) break;
    }
    for (let y = this.location.y - 1; y >= 0; y--) {
      const obstacle = boardPieces.find(
        (piece) =>
          piece.location.y === y && piece.location.x === this.location.x
      );
      if (!obstacle || obstacle.color !== this.color)
        ways.push({ y, x: this.location.x });
      if (obstacle) break;
    }
    for (let y = this.location.y + 1; y <= 7; y++) {
      const obstacle = boardPieces.find(
        (piece) =>
          piece.location.y === y && piece.location.x === this.location.x
      );
      if (!obstacle || obstacle.color !== this.color)
        ways.push({ y, x: this.location.x });
      if (obstacle) break;
    }

    // if (!isForKingCheck) this.removeEnemyKingFromWays(ways, boardPieces);
    // if (!isForAllPossibleWays) this.checkForNextMove(boardPieces, ways);
    return ways;
  }
}
