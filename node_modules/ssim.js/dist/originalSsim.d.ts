import { Options, Matrix } from './types';
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
export declare function originalSsim(pixels1: Matrix, pixels2: Matrix, options: Options): Matrix;
