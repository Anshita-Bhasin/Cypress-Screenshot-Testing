"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.skip2d = void 0;
/**
 * Generates a matrix based on input `mx` but excluding items based on their modulo and their
 * position in the original matrix.
 *
 * It's a crude implementation of Matlab's `A(1:f:end,1:f:end)` syntax where the first parameter
 * is the matrix, the next one is an array describing the rows to skip [start position, every `f`
 * elements an end position] and the last one follows the same syntax for columns.
 *
 * @example
 * ```
 * img1(1:f:end,1:f:end)
 *
 * ```
 *
 * becomes:
 *
 * ```
 * skip2d(img1, [0, f, img1.length], [0, f, img1[0].length])
 * ```
 *
 * Note that the start index is 0 since, unlike Matlab's, arrays start at 0. Also, unlike in Matlab,
 * `f` must be an integer greater than or equal to 1.
 *
 * @method skip2d
 * @param {Matrix} A - The input matrix
 * @param {Array<number>} - start row, every row, end row
 * @param {Array<number>} - start col, every col, end col
 * @returns {Matrix} B - The downsized matrix
 * @public
 * @memberOf matlab
 * @since 0.0.2
 */
function skip2d(A, _a, _b) {
    var startRow = _a[0], everyRow = _a[1], endRow = _a[2];
    var startCol = _b[0], everyCol = _b[1], endCol = _b[2];
    var width = Math.ceil((endCol - startCol) / everyCol);
    var height = Math.ceil((endRow - startRow) / everyRow);
    var data = new Array(width * height);
    for (var i = 0; i < height; i++) {
        for (var j = 0; j < width; j++) {
            var Ai = startRow + i * everyRow;
            var Aj = startCol + j * everyCol;
            data[i * width + j] = A.data[Ai * A.width + Aj];
        }
    }
    return {
        data: data,
        width: width,
        height: height,
    };
}
exports.skip2d = skip2d;
//# sourceMappingURL=skip2d.js.map