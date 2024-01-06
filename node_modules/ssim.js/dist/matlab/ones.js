"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ones = void 0;
var numbers_1 = require("./internal/numbers");
/**
 * Create a matrix of all ones
 *
 * This method mimics Matlab's `ones` method
 *
 * @method ones
 * @param {Number} height - The height of the matrix (rows)
 * @param {Number} [width=height] - The width of the matrix (columns)
 * @returns {Matrix} B - An n-by-m matrix of ones
 * @public
 * @memberOf matlab
 * @since 0.0.2
 */
function ones(height, width) {
    if (width === void 0) { width = height; }
    return numbers_1.numbers(height, width, 1);
}
exports.ones = ones;
//# sourceMappingURL=ones.js.map