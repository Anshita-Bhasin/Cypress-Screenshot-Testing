import { Matrix } from '../types';
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
export declare function zeros(height: number, width?: number): Matrix;
