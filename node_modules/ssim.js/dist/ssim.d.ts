import { Options, Matrix } from './types';
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
export declare function ssim(pixels1: Matrix, pixels2: Matrix, options: Options): Matrix;
