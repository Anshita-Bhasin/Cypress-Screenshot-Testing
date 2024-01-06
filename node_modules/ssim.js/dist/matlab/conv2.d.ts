import { Matrix, Shape } from '../types';
/**
 * `C = conv2(a,b)` computes the two-dimensional convolution of matrices `a` and `b`. If one of
 * these matrices describes a two-dimensional finite impulse response (FIR) filter, the other matrix
 * is filtered in two dimensions. The size of `c` is determined as follows:
 *
 * ```
 * if [ma,na] = size(a), [mb,nb] = size(b), and [mc,nc] = size(c), then
 * mc = max([ma+mb-1,ma,mb]) and nc = max([na+nb-1,na,nb]).
 * ```
 *
 * `shape` returns a subsection of the two-dimensional convolution, based on one of these values for
 * the parameter:
 *
 * - **full**: Returns the full two-dimensional convolution (default).
 * - **same**: Returns the central part of the convolution of the same size as `a`.
 * - **valid**: Returns only those parts of the convolution that are computed without the
 *   zero-padded edges. Using this option, `size(c) === max([ma-max(0,mb-1),na-max(0,nb-1)],0)`
 *
 * @method mxConv2
 * @param {Matrix} a - The first matrix
 * @param {Matrix} b - The second matrix
 * @param {String} [shape='full'] - One of 'full' / 'same' / 'valid'
 * @returns {Matrix} c - Returns the convolution filtered by `shape`
 * @private
 * @memberOf matlab
 */
declare function mxConv2({ data: ref, width: refWidth, height: refHeight }: Matrix, b: Matrix, shape?: Shape): Matrix;
/**
 * `C = boxConv(a,b)` computes the two-dimensional convolution of a matrix `a` and box kernel `b`.
 *
 * The `shape` parameter returns a subsection of the two-dimensional convolution as defined by
 * mxConv2.
 *
 * @method boxConv
 * @param {Matrix} a - The first matrix
 * @param {Matrix} b - The box kernel
 * @param {String} [shape='full'] - One of 'full' / 'same' / 'valid'
 * @returns {Matrix} c - Returns the convolution filtered by `shape`
 * @private
 * @memberOf matlab
 */
declare function boxConv(a: Matrix, { data, width, height }: Matrix, shape?: Shape): Matrix;
/**
 * `C = convn(a,b1, b2)` computes the two-dimensional convolution of matrices `a.*b1.*b2`.
 *
 * The size of `c` is determined as follows:
 *
 * ```
 * if [ma,na] = size(a), [mb] = size(b1), [nb] = size(b2) and [mc,nc] = size(c), then
 * mc = max([ma+mb-1,ma,mb]) and nc = max([na+nb-1,na,nb]).
 * ```
 *
 * `shape` returns a section of the two-dimensional convolution, based on one of these values for
 * the parameter:
 *
 * - **full**: Returns the full two-dimensional convolution (default).
 * - **same**: Returns the central part of the convolution of the same size as `a`.
 * - **valid**: Returns only those parts of the convolution that are computed without the
 *   zero-padded edges. Using this option, `size(c) === max([ma-max(0,mb-1),na-max(0,nb-1)],0)`
 *
 * This method mimics Matlab's `convn` method but limited to 2 1 dimensional kernels.
 *
 * @method convn
 * @param {Matrix} a - The first matrix
 * @param {Matrix} b1 - The first 1-D kernel
 * @param {Matrix} b2 - The second 1-D kernel
 * @param {String} [shape='full'] - One of 'full' / 'same' / 'valid'
 * @returns {Matrix} c - Returns the convolution filtered by `shape`
 * @private
 * @memberOf matlab
 */
declare function convn(a: Matrix, b1: Matrix, b2: Matrix, shape?: Shape): Matrix;
/**
 * `C = conv2(a,b)` computes the two-dimensional convolution of matrices `a` and `b`. If one of
 * these matrices describes a two-dimensional finite impulse response (FIR) filter, the other matrix
 * is filtered in two dimensions.
 *
 * The size of `c` is determined as follows:
 *
 * ```
 * if [ma,na] = size(a), [mb,nb] = size(b), and [mc,nc] = size(c), then
 * mc = max([ma+mb-1,ma,mb]) and nc = max([na+nb-1,na,nb]).
 * ```
 *
 * `shape` returns a subsection of the two-dimensional convolution, based on one of these values for
 * the parameter:
 *
 * - **full**: Returns the full two-dimensional convolution (default).
 * - **same**: Returns the central part of the convolution of the same size as `a`.
 * - **valid**: Returns only those parts of the convolution that are computed without the
 *   zero-padded edges. Using this option, `size(c) === max([ma-max(0,mb-1),na-max(0,nb-1)],0)`
 *
 * Alternatively, 2 1-D filters may be provided as parameters, following the format:
 * `conv2(a, b1, b2, shape)`. This is similar to Matlab's implementation allowing any number of 1-D
 * filters to be applied but limited to 2
 *
 * This method mimics Matlab's `conv2` method.
 *
 * Given:
 * const A = rand(3);
 * const B = rand(4);
 *
 * @example conv2(A,B); // output is 6-by-6
 * {
 *   data: [
 *     0.1838, 0.2374, 0.9727, 1.2644, 0.7890, 0.3750,
 *     0.6929, 1.2019, 1.5499, 2.1733, 1.3325, 0.3096,
 *     0.5627, 1.5150, 2.3576, 3.1553, 2.5373, 1.0602,
 *     0.9986, 2.3811, 3.4302, 3.5128, 2.4489, 0.8462,
 *     0.3089, 1.1419, 1.8229, 2.1561, 1.6364, 0.6841,
 *     0.3287, 0.9347, 1.6464, 1.7928, 1.2422, 0.5423
 *   ],
 *   width: 6,
 *   height: 6
 * }
 *
 * @example conv2(A,B,'same') => // output is the same size as A: 3-by-3
 * {
 *   data: [
 *     2.3576, 3.1553, 2.5373,
 *     3.4302, 3.5128, 2.4489,
 *     1.8229, 2.1561, 1.6364
 *   ],
 *   width: 3,
 *   height: 3
 * }
 *
 * @method conv2
 * @param {Array} args - The list of arguments, see `mxConv2` and `convn` for the exact parameters
 * @returns {Matrix} c - Returns the convolution filtered by `shape`
 * @public
 * @memberOf matlab
 * @since 0.0.2
 */
export declare function conv2(...args: Parameters<typeof boxConv | typeof convn | typeof mxConv2>): Matrix;
export {};
