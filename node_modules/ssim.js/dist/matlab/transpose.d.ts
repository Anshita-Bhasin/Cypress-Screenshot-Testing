import { Matrix } from '../types';
/**
 * Transposes a vector or a matrix
 *
 * This method mimics Matlab's `transpose` method (which equals to the `A.'` syntax)
 *
 * `B = A.'` returns the nonconjugate transpose of A, that is, interchanges the row and column index
 * for each element.
 *
 * This method does not handle complex or imaginary numbers
 *
 * @method transpose
 * @param {Matrix} A - The matrix to transpose
 * @returns {Matrix} B - The transposed matrix
 * @public
 * @memberOf matlab
 */
export declare function transpose({ data: ref, width, height }: Matrix): Matrix;
