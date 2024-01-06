"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bezkrovnySsim = void 0;
/**
 * Implements Bezkrovny's ssim-specific logic.
 *
 * Refactor of the TypeScript SSIM implementation by Bezkrovny, modified to match the api of ssim.js
 * and reduce duplication.
 *
 * The original work is available at: https://github.com/igor-bezkrovny/image-quantization which is
 * itself a port of the Java SSIM implementation available at https://github.com/rhys-e/structural-similarity
 * both under MIT license
 *
 * @namespace bezkrovnySsim
 */
var math_1 = require("./math");
var matlab_1 = require("./matlab");
/**
 * Generates a SSIM map based on two input image matrices.
 *
 * Images must be a 2-Dimensional grayscale image
 *
 * This method produces a simliar output to `assets/ssim.m` (~1%) when running on Matlab. It's based
 * of Igor Bezkrovny's TypeScript implementation
 *
 * @method bezkrovnySsim
 * @param {Matrix} pixels1 - The reference matrix
 * @param {Matrix} pixels2 - The second matrix to compare against
 * @param {Options} options - The input options parameter
 * @returns {Matrix} ssim_map - A matrix containing the map of computed SSIMs
 * @public
 * @memberOf bezkrovnySsim
 */
function bezkrovnySsim(pixels1, pixels2, options) {
    var windowSize = options.windowSize;
    var width = Math.ceil(pixels1.width / windowSize);
    var height = Math.ceil(pixels1.height / windowSize);
    var data = new Array(width * height);
    var counter = 0;
    for (var y = 0; y < pixels1.height; y += windowSize) {
        for (var x = 0; x < pixels1.width; x += windowSize) {
            var windowWidth = Math.min(windowSize, pixels1.width - x);
            var windowHeight = Math.min(windowSize, pixels1.height - y);
            var values1 = matlab_1.sub(pixels1, x, windowHeight, y, windowWidth);
            var values2 = matlab_1.sub(pixels2, x, windowHeight, y, windowWidth);
            data[counter++] = windowSsim(values1, values2, options);
        }
    }
    return { data: data, width: width, height: height };
}
exports.bezkrovnySsim = bezkrovnySsim;
/**
 * Generates the per-window ssim value
 *
 * @method windowSsim
 * @param {Matrix} values1 - The matrix of the ssim window to compute for image 1
 * @param {Matrix} values2 - The matrix of the ssim window to compute for image 2
 * @param {Options} options - The input options parameter
 * @returns {Number} ssim - The ssim value at the current window
 * @private
 * @memberOf bezkrovnySsim
 */
function windowSsim(_a, _b, _c) {
    var values1 = _a.data;
    var values2 = _b.data;
    var bitDepth = _c.bitDepth, k1 = _c.k1, k2 = _c.k2;
    var L = Math.pow(2, bitDepth) - 1;
    var c1 = Math.pow((k1 * L), 2);
    var c2 = Math.pow((k2 * L), 2);
    var average1 = math_1.average(values1);
    var average2 = math_1.average(values2);
    var σSqx = math_1.variance(values1, average1);
    var σSqy = math_1.variance(values2, average2);
    var σxy = math_1.covariance(values1, values2, average1, average2);
    var numerator = (2 * average1 * average2 + c1) * (2 * σxy + c2);
    var denom1 = Math.pow(average1, 2) + Math.pow(average2, 2) + c1;
    var denom2 = σSqx + σSqy + c2;
    return numerator / (denom1 * denom2);
}
//# sourceMappingURL=bezkrovnySsim.js.map