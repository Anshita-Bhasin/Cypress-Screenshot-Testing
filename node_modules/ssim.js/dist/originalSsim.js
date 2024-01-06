"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.originalSsim = void 0;
/* eslint-disable max-statements */
// Exceeding max-statements to preserve the structure of the original Matlab script
var math_1 = require("./math");
var matlab_1 = require("./matlab");
/**
 * Generates a SSIM map based on two input image matrices. For images greater than 512 pixels, it
 * will downsample them.
 *
 * Images must be a 2-Dimensional grayscale image
 *
 * This method is a line-by-line port of `assets/ssim.m`. Some operations are more verbose here
 * since more logic is needed in JS to manipulate matrices than in Matlab
 *
 * Note that setting `options1.k1` and `options.k2` to 0 will generate the UQI (Universal Quality
 * Index), since it's a special case of SSIM. In general that's undesierable since `k1` and `k2`
 * contribute to the stabilization coeficients `c1` and `c2`.
 *
 * For a mathematically equivalent and more efficient implementation check `./ssim.js`.
 *
 * @method originalSsim
 * @param {Matrix} pixels1 - The reference matrix
 * @param {Matrix} pixels2 - The second matrix to compare against
 * @param {Object} options - The input options parameter
 * @returns {Matrix} ssim_map - A matrix containing the map of computed SSIMs
 * @public
 * @memberOf ssim
 * @since 0.0.2
 */
function originalSsim(pixels1, pixels2, options) {
    var w = matlab_1.fspecial('gaussian', options.windowSize, 1.5);
    var L = Math.pow(2, options.bitDepth) - 1;
    var c1 = Math.pow((options.k1 * L), 2);
    var c2 = Math.pow((options.k2 * L), 2);
    w = math_1.divide2d(w, math_1.sum2d(w));
    var μ1 = matlab_1.filter2(w, pixels1, 'valid');
    var μ2 = matlab_1.filter2(w, pixels2, 'valid');
    var μ1Sq = math_1.square2d(μ1);
    var μ2Sq = math_1.square2d(μ2);
    var μ12 = math_1.multiply2d(μ1, μ2);
    var pixels1Sq = math_1.square2d(pixels1);
    var pixels2Sq = math_1.square2d(pixels2);
    var σ1Sq = math_1.subtract2d(matlab_1.filter2(w, pixels1Sq, 'valid'), μ1Sq);
    var σ2Sq = math_1.subtract2d(matlab_1.filter2(w, pixels2Sq, 'valid'), μ2Sq);
    var σ12 = math_1.subtract2d(matlab_1.filter2(w, math_1.multiply2d(pixels1, pixels2), 'valid'), μ12);
    if (c1 > 0 && c2 > 0) {
        var num1 = math_1.add2d(math_1.multiply2d(μ12, 2), c1);
        var num2 = math_1.add2d(math_1.multiply2d(σ12, 2), c2);
        var denom1 = math_1.add2d(math_1.add2d(μ1Sq, μ2Sq), c1);
        var denom2 = math_1.add2d(math_1.add2d(σ1Sq, σ2Sq), c2);
        return math_1.divide2d(math_1.multiply2d(num1, num2), math_1.multiply2d(denom1, denom2));
    }
    var numerator1 = math_1.multiply2d(μ12, 2);
    var numerator2 = math_1.multiply2d(σ12, 2);
    var denominator1 = math_1.add2d(μ1Sq, μ2Sq);
    var denominator2 = math_1.add2d(σ1Sq, σ2Sq);
    return math_1.divide2d(math_1.multiply2d(numerator1, numerator2), math_1.multiply2d(denominator1, denominator2));
}
exports.originalSsim = originalSsim;
//# sourceMappingURL=originalSsim.js.map