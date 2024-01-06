"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.zeros = void 0;
var numbers_1 = require("./internal/numbers");
/**
 * Create a matrix of all zeros
 *
 * This method mimics Matlab's `zeros` method
 *
 * @method zeros
 * @param {Number} height - The height of the matrix (rows)
 * @param {Number} [width=height] - The width of the matrix (columns)
 * @returns {Matrix} B - An n-by-m matrix of zeros
 * @public
 * @memberOf matlab
 * @since 0.0.2
 */
function zeros(height, width) {
    if (width === void 0) { width = height; }
    return numbers_1.numbers(height, width, 0);
}
exports.zeros = zeros;
//# sourceMappingURL=zeros.js.map