/**
 * Calculate the coordinates of the next cell
 * @param {number} x - The x coordinate of the current cell
 * @param {number} y - The y coordinate of the current cell
 * @param {number} direction - The direction to move
 * @param {boolean} [isOptional=false] - The optional parameter
 * @returns {object} The next cell coordinates
 * @example
 * //Example usage of calculateCoordinates
 * const { x, y } = calculateCoordinates(0, 0, 1);
 */
export function calculateCoordinates(x, y, direction, isOptional = false) {
  console.log("===>", isOptional);

  switch (direction) {
    case 0:
      return { x: x - 1, y };
    case 1:
      return { x, y: y + 1 };
    case 2:
      return { x: x + 1, y };
    case 3:
      return { x, y: y - 1 };
    default:
      return { x, y };
  }
}
