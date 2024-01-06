"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transpose = void 0;
/**
 * Transposes a vector or a matrix
 *
 * This method mimics Matlab's `transpose` method (which equals to the `A.'` syntax)
 *
 * `B = A.'` returns the nonconjugate transpose of A, that is, interchanges the row and column index
 * for each element.
 *
 * This method does not handle complex or imaginary numbers
 *
 * @method transpose
 * @param {Matrix} A - The matrix to transpose
 * @returns {Matrix} B - The transposed matrix
 * @public
 * @memberOf matlab
 */
function transpose(_a) {
    var ref = _a.data, width = _a.width, height = _a.height;
    var data = new Array(width * height);
    for (var i = 0; i < height; i++) {
        for (var j = 0; j < width; j++) {
            data[j * height + i] = ref[i * width + j];
        }
    }
    return {
        data: data,
        height: width,
        width: height,
    };
}
exports.transpose = transpose;
//# sourceMappingURL=transpose.js.map