import { Matrix } from '../types';
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
export declare function ones(height: number, width?: number): Matrix;
