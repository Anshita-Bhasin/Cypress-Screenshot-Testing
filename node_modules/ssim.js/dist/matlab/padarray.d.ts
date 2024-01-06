import { Matrix } from '../types';
export declare type PaddingValue = 'symmetric';
export declare type PaddingDirection = 'both';
/**
 * `B = padarray(A,padsize)` pads array `A`. padsize is a vector of nonnegative integers that
 * specifies both, the amount of padding to add and the dimension along which to add it. The value
 * of an element in the vector specifies the amount of padding to add. The order of the element in
 * the vector specifies the dimension along which to add the padding.
 *
 * For example, a padsize value of `[2 3]` means add 2 elements of padding along the first dimension
 * and 3 elements of padding along the second dimension.
 *
 * By default, paddarray adds padding before the first element and after the last element along the
 * specified dimension.
 *
 * `B = padarray(A,padsize,padval)` pads array `A` where `padval` specifies the value to use as the
 * pad value. `padval` can only be 'symmetric' for this implementation of `padarray` which will pad
 * the array with mirror reflections of itself.
 *
 * This method mimics Matlab's `padarray` method with `padval = 'symmetric'` and
 * `direction = 'both'`. No other options have been implemented and, if set, they will be ignored.
 *
 * This method has been unfolded for performance and switched to simple for loops. Readability
 * suffers.
 *
 * @method padarray
 * @param {Matrix} A - The target matrix
 * @param {Array<number>} padding - An array where the first element is the padding to apply to
 * each side on each row and the second one is the vertical padding for each side of each column
 * @param {String} [padval='symmetric'] - The type of padding to apply (coerced to 'symmetric')
 * @param {String} [direction='both'] - The direction to which apply padding (coerced to 'both')
 * @returns {Matrix} c - An array with padding added on each side.
 * @public
 * @memberOf matlab
 * @since 0.0.2
 */
export declare function padarray(A: Matrix, [padHeight, padWidth]: [number, number], _padval?: PaddingValue, _direction?: PaddingDirection): Matrix;
