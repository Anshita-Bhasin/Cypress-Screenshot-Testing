"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.numbers = void 0;
/**
 * Create a matrix with each cell with the value of `num`
 *
 * @method numbers
 * @param {Number} height - The number of rows
 * @param {Number} width - The number of columns
 * @param {Number} num - The value to set on each cell
 * @returns {Matrix} B - An n-by-m matrix of `num`
 * @private
 * @memberOf matlab
 * @since 0.0.2
 */
function numbers(height, width, num) {
    var size = width * height;
    var data = new Array(size);
    for (var x = 0; x < size; x++) {
        data[x] = num;
    }
    return {
        data: data,
        width: width,
        height: height,
    };
}
exports.numbers = numbers;
//# sourceMappingURL=numbers.js.map