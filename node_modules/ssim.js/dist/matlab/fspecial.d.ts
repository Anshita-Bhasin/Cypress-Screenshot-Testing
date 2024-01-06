import { Matrix } from '../types';
/**
 * Create predefined 2-D filter
 *
 * `h = fspecial(type, parameters)` accepts the filter specified by type plus additional modifying
 * parameters particular to the type of filter chosen. If you omit these arguments, fspecial uses
 * default values for the parameters.
 *
 * This method mimics Matlab's `fspecial2` method with `type = 'gaussian'`. `hsize` cannot be a
 * vector (unlike Matlab's implementation), only a Number is accepted.
 *
 * `h = fspecial('gaussian', hsize, sigma)` returns a rotationally symmetric Gaussian lowpass filter
 * of size `hsize` with standard deviation sigma (positive). In this implementation `hsize` will
 * always be a scalar, which will result in `h` being a square matrix.
 *
 * The gaussian logic follows: hg(hsize) = e^(-2*hsize^2 / 2σ^2)
 *
 * @example
 *   fspecial('gaussian', 3, 1.5) === {
 *     data: [
 *       0.094742, 0.118318, 0.094742,
 *       0.118318, 0.147761, 0.118318,
 *       0.094742, 0.118318, 0.094742
 *     ],
 *     width: 3,
 *     height: 3
 *   };
 *
 * @method fspecial
 * @param {String} [type='gaussian'] - The type of 2D filter to create (coerced to 'gaussian')
 * @param {Number} [hsize=3] - The length of the filter
 * @param {Number} [σ=1.5] - The filter sigma value
 * @returns {Matrix} c - Returns the central part of the convolution of the same
 * size as `a`.
 * @public
 * @memberOf matlab
 * @since 0.0.2
 */
export declare function fspecial(_type?: 'gaussian', hsize?: number, σ?: number): Matrix;
