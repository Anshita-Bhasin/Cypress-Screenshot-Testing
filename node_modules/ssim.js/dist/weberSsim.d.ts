/**
 * Implements Dan Weber's ssim-specific logic.
 *
 * @namespace weberSsim
 */
import { ImageMatrix, MSSIMMatrix, Options } from './types';
export declare function partialSumMatrix1(pixels: ImageMatrix, f: (v: number, x: number, y: number) => number): {
    data: Int32Array;
    height: number;
    width: number;
};
export declare function partialSumMatrix2(pixels1: ImageMatrix, pixels2: ImageMatrix, f: (a: number, b: number, x: number, y: number) => number): {
    data: Int32Array;
    height: number;
    width: number;
};
export declare function windowMatrix(sumMatrix: any, windowSize: number, divisor: number): {
    height: number;
    width: number;
    data: Int32Array;
};
export declare function windowSums(pixels: ImageMatrix, windowSize: number): {
    height: number;
    width: number;
    data: Int32Array;
};
export declare function windowVariance(pixels: ImageMatrix, sums: any, windowSize: number): {
    height: number;
    width: number;
    data: Int32Array;
};
export declare function windowCovariance(pixels1: ImageMatrix, pixels2: ImageMatrix, sums1: any, sums2: any, windowSize: number): {
    height: number;
    width: number;
    data: Int32Array;
};
/**
 * Generates a SSIM map based on two input image matrices.
 * Weber SSIM is an SSIM algorithm that operates in linear time by building
 * partial sum arrays of values, variances, and covariances, making each lookup
 * performable in constant time and each variance calculation, only performed
 * once.
 *
 * Images must be a 2-Dimensional grayscale image.
 *
 * @method weberSsim
 * @param {ImageMatrix} pixels1 - The reference matrix
 * @param {ImageMatrix} pixels2 - The second matrix to compare against
 * @param {Options} options - The input options parameter
 * @returns {ImageMatrix} ssim_map - A matrix containing the map of computed
 * SSIMs
 * @public
 * @memberOf weberSsim
 */
export declare function weberSsim(pixels1: ImageMatrix, pixels2: ImageMatrix, options: Options): MSSIMMatrix;
