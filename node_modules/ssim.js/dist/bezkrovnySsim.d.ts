import { Options, Matrix } from './types';
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
export declare function bezkrovnySsim(pixels1: Matrix, pixels2: Matrix, options: Options): {
    data: any[];
    width: number;
    height: number;
};
