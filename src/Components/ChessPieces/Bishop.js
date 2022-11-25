import ChessPiece from "./ChessPiece";
import BishopMarkup from "./Markups/Bishop";

export default class Bishop extends ChessPiece {
  constructor(id, location, color) {
    super(id, location, color, "bishop");
    this.markup = <BishopMarkup color={color} />;
  }

  possibleWays(boardPieces) {
    let ways = [];
    let x;
    let y;
    for (
      x = this.location.x + 1, y = this.location.y + 1;
      x <= 7 && y <= 7;
      x++, y++
    ) {
      const obstacle = boardPieces.find(
        (piece) => piece.location.x === x && piece.location.y === y
      );

      if (!obstacle || obstacle.color !== this.color) ways.push({ x, y });
      if (obstacle) break;
    }

    for (
      x = this.location.x - 1, y = this.location.y + 1;
      x >= 0 && y <= 7;
      x--, y++
    ) {
      const obstacle = boardPieces.find(
        (piece) => piece.location.x === x && piece.location.y === y
      );
      if (!obstacle || obstacle.color !== this.color) ways.push({ x, y });
      if (obstacle) break;
    }

    for (
      x = this.location.x + 1, y = this.location.y - 1;
      x <= 7 && y >= 0;
      x++, y--
    ) {
      const obstacle = boardPieces.find(
        (piece) => piece.location.x === x && piece.location.y === y
      );
      if (!obstacle || obstacle.color !== this.color) ways.push({ x, y });
      if (obstacle) break;
    }

    for (
      x = this.location.x - 1, y = this.location.y - 1;
      x >= 0 && y >= 0;
      x--, y--
    ) {
      const obstacle = boardPieces.find(
        (piece) => piece.location.x === x && piece.location.y === y
      );
      if (!obstacle || obstacle.color !== this.color) ways.push({ x, y });
      if (obstacle) break;
    }
    this.removeEnemyKingFromWays(ways, boardPieces);
    return ways;
  }
}