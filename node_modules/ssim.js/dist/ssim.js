"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ssim = void 0;
/**
 * Implements all ssim-specific logic.
 *
 * Reproduces the original SSIM matlab scripts. For a direct comparison you may want to check the
 * scripts contained within `/assets`
 *
 * @namespace ssim
 */
var math_1 = require("./math");
var matlab_1 = require("./matlab");
/**
 * Generates a SSIM map based on two input image matrices. For images greater than 512 pixels, it
 * will downsample by default (unless `options.downsample` is set to falsy).
 *
 * Images must be a 2-Dimensional grayscale image
 *
 * This method produces the same exact output than `assets/ssim.m` when running on Matlab. It's
 * mathematically equivalent but it is not a line-by-line port. If you want a line-by-line port
 * check `originalSsim`. Several performance optimizations have been made here to achieve greater
 * performance.
 *
 * @method ssim
 * @param {Matrix} pixels1 - The reference matrix
 * @param {Matrix} pixels2 - The second matrix to compare against
 * @param {Options} options - The input options parameter
 * @returns {Matrix} ssim_map - A matrix containing the map of computed SSIMs
 * @public
 * @memberOf ssim
 */
function ssim(pixels1, pixels2, options) {
    var w = matlab_1.normpdf(getRange(options.windowSize), 0, 1.5);
    var L = Math.pow(2, options.bitDepth) - 1;
    var c1 = Math.pow((options.k1 * L), 2);
    var c2 = Math.pow((options.k2 * L), 2);
    w = math_1.divide2d(w, math_1.sum2d(w));
    var wt = matlab_1.transpose(w);
    var μ1 = matlab_1.conv2(pixels1, w, wt, 'valid');
    var μ2 = matlab_1.conv2(pixels2, w, wt, 'valid');
    var μ1Sq = math_1.square2d(μ1);
    var μ2Sq = math_1.square2d(μ2);
    var μ12 = math_1.multiply2d(μ1, μ2);
    var pixels1Sq = math_1.square2d(pixels1);
    var pixels2Sq = math_1.square2d(pixels2);
    var σ1Sq = math_1.subtract2d(matlab_1.conv2(pixels1Sq, w, wt, 'valid'), μ1Sq);
    var σ2Sq = math_1.subtract2d(matlab_1.conv2(pixels2Sq, w, wt, 'valid'), μ2Sq);
    var σ12 = math_1.subtract2d(matlab_1.conv2(math_1.multiply2d(pixels1, pixels2), w, wt, 'valid'), μ12);
    if (c1 > 0 && c2 > 0) {
        return genSSIM(μ12, σ12, μ1Sq, μ2Sq, σ1Sq, σ2Sq, c1, c2);
    }
    return genUQI(μ12, σ12, μ1Sq, μ2Sq, σ1Sq, σ2Sq);
}
exports.ssim = ssim;
/**
 * Generates a range of distances of size `2n+1` with increments of 1 and centered at 0.
 *
 * @example `getRange(2) => [2 1 0 1 2]
 * @method getRange
 * @param {Number} size - The maximum distance from the center
 * @returns {Matrix} out - The generated vector
 * @private
 * @memberOf ssim
 */
function getRange(size) {
    var offset = Math.floor(size / 2);
    var data = new Array(offset * 2 + 1);
    for (var x = -offset; x <= offset; x++) {
        data[x + offset] = Math.abs(x);
    }
    return {
        data: data,
        width: data.length,
        height: 1,
    };
}
/**
 * Generates the ssim_map based on the intermediate values of the convolutions of the input with the
 * gaussian filter.
 *
 * These methods apply when K1 or K2 are not 0 (non UQI)
 *
 * @method genSSIM
 * @param {Matrix} μ12 - The cell-by cell multiplication of both images convolved
 * with the gaussian filter
 * @param {Matrix} σ12 - The convolution of cell-by cell multiplication of both
 * images minus μ12
 * @param {Matrix} μ1Sq - The convolution of image1 with the gaussian filter squared
 * @param {Matrix} μ2Sq - The convolution of image2 with the gaussian filter squared
 * @param {Matrix} σ1Sq - The convolution of image1^2, minus μ1Sq
 * @param {Matrix} σ2Sq - The convolution of image2^2, minus μ2Sq
 * @param {Number} c1 - The first stability constant
 * @param {Number} c2 - The second stability constant
 * @returns {Matrix} ssim_map - The generated map of SSIM values at each window
 * @private
 * @memberOf ssim
 */
function genSSIM(μ12, σ12, μ1Sq, μ2Sq, σ1Sq, σ2Sq, c1, c2) {
    var num1 = math_1.add2d(math_1.multiply2d(μ12, 2), c1);
    var num2 = math_1.add2d(math_1.multiply2d(σ12, 2), c2);
    var denom1 = math_1.add2d(math_1.add2d(μ1Sq, μ2Sq), c1);
    var denom2 = math_1.add2d(math_1.add2d(σ1Sq, σ2Sq), c2);
    return math_1.divide2d(math_1.multiply2d(num1, num2), math_1.multiply2d(denom1, denom2));
}
/**
 * Generates the Universal Quality Index (UQI) ssim_map based on the intermediate values of the
 * convolutions of the input with the gaussian filter.
 *
 * These methods apply when K1 or K2 are 0 (UQI)
 *
 * @method genUQI
 * @param {Matrix} μ12 - The cell-by cell multiplication of both images convolved
 * with the gaussian filter
 * @param {Matrix} σ12 - The convolution of cell-by cell multiplication of both
 * images minus μ12
 * @param {Matrix} μ1Sq - The convolution of image1 with the gaussian filter squared
 * @param {Matrix} μ2Sq - The convolution of image2 with the gaussian filter squared
 * @param {Matrix} σ1Sq - The convolution of image1^2, minus μ1Sq
 * @param {Matrix} σ2Sq - The convolution of image2^2, minus μ2Sq
 * @returns {Matrix} ssim_map - The generated map of SSIM values at each window
 * @private
 * @memberOf ssim
 */
function genUQI(μ12, σ12, μ1Sq, μ2Sq, σ1Sq, σ2Sq) {
    var numerator1 = math_1.multiply2d(μ12, 2);
    var numerator2 = math_1.multiply2d(σ12, 2);
    var denominator1 = math_1.add2d(μ1Sq, μ2Sq);
    var denominator2 = math_1.add2d(σ1Sq, σ2Sq);
    return math_1.divide2d(math_1.multiply2d(numerator1, numerator2), math_1.multiply2d(denominator1, denominator2));
}
//# sourceMappingURL=ssim.js.map