import { PaddingValue } from './padarray';
import { Matrix, Shape } from '../types';
/**
 * `B = imfilter(A,f)` filters a 2-dimensional array `A` with the 2-dimensional filter `f`. The
 * result `B` has the same size as `A`.
 *
 * `imfilter` computes each element of the output, `B`. If `A` is an integer, `imfilter` will not
 * truncate the output elements that exceed the range, and it will not round fractional values.
 *
 * This method mimics Matlab's `imfilter` method with `padval = 'symmetric'` without integer
 * rounding. No other options have been implemented and, if set, they will be ignored.
 *
 * @method imfilter
 * @param {Matrix} A - The target matrix
 * @param {Matrix} f - The filter to apply
 * @param {String} [pad="symmetric"] - The type of padding. Only "symmetric" is implemented
 * @param {String} [resSize="same"] - The format to use for the filter size. Valid values are:
 * "same", "valid" and "full"
 * @returns {Matrix} B - The filtered array
 * @public
 * @memberOf matlab
 * @since 0.0.2
 */
export declare function imfilter(A: Matrix, f: Matrix, pad?: PaddingValue, resSize?: Shape): Matrix;
