/**
 * Generates all basic arithmetic and matrix computations required
 *
 * Most of these methods use plain for loops and reduce nested calls. This results in about ~100x
 * improvement on SSIM computation for 512x512 images on recent versions of node (~v6.7) over
 * implementations using map or reduce.
 *
 * @namespace math
 */
import { Matrix } from './types';
/**
 * Computes the mean value of a given array. It is the sum of a list of numbers divided by the
 * number of numbers in the list.
 *
 * @method average
 * @param {Number[]} xn - The target array
 * @returns {Number} average - The mean value of all elements within the array
 * @public
 * @memberOf math
 * @since 0.0.1
 */
export declare function average(xn: number[]): number;
/**
 * Computes the sum of a given array. It adds all values within the array and returns the total
 *
 * @method sum
 * @param {Number[]} xn - The target array
 * @returns {Number} sum - The total value
 * @private
 * @memberOf math
 * @since 0.0.1
 */
export declare function sum(xn: number[]): number;
/**
 * Computes the largest integer less than or equal to a given number for each member of a given
 * array.
 *
 * @method floor
 * @param {Number[]} xn - The target array
 * @returns {Number[]} floorArr - An array with the Math.floor value for each element of the target
 * array
 * @private
 * @memberOf math
 * @since 0.0.1
 */
export declare function floor(xn: number[]): number[];
/**
 * Computes the sum of all elements within a matrix
 *
 * @method sum2d
 * @param {Matrix} A - The input matrix
 * @returns {Number} sum - The total value of adding each cell
 * @public
 * @memberOf math
 * @since 0.0.2
 */
export declare function sum2d({ data }: Matrix): number;
/**
 * Adds values of two matrices of the same size or a matrix and a constant
 *
 * @method add2d
 * @param {Matrix} A - The first input matrix
 * @param {Matrix|Number} increase - The second input matrix or the constant value
 * @returns {Matrix} B - A matrix with a cell-by-cell sum of the first and second parameters
 * @public
 * @memberOf math
 * @since 0.0.2
 */
export declare function add2d(A: Matrix, increase: Matrix | number): Matrix;
/**
 * Subtracts values of two matrices of the same size or a matrix and a constant
 *
 * @method subtract2d
 * @param {Matrix} A - The first input matrix
 * @param {Matrix|Number} decrease - The second input matrix or the constant value
 * @returns {Matrix} B - A matrix with a cell-by-cell subtraction of the first parameter minus the
 * second one
 * @public
 * @memberOf math
 */
export declare function subtract2d(A: Matrix, decrease: Matrix | number): Matrix;
/**
 * Divides values of two matrices of the same size or between a matrix and a constant
 *
 * @method divide2d
 * @param {Matrix} A - The first input matrix
 * @param {Matrix|Number} divisor - The second input matrix or the constant value
 * @returns {Matrix} B - A matrix with the cell-by-cell division of the first and second parameters
 * @public
 * @memberOf math
 * @since 0.0.2
 */
export declare function divide2d(A: Matrix, divisor: Matrix | number): Matrix;
/**
 * Multiplies values of two matrices of the same size or between a matrix and a constant
 *
 * @method multiply2d
 * @param {Matrix} A - The first input matrix
 * @param {Matrix|Number} multiplier - The second input matrix or the constant value
 * @returns {Matrix} out - A matrix with the cell-by-cell multiplication of the first and second
 * parameters
 * @public
 * @memberOf math
 * @since 0.0.2
 */
export declare function multiply2d(A: Matrix, multiplier: Matrix | number): Matrix;
/**
 * Generates the cell-by-cell square value of a target matrix
 *
 * @method square2d
 * @param {Matrix} A - The target matrix
 * @returns {Matrix} B - A matrix with squared value of each cell
 * @public
 * @memberOf math
 * @since 0.0.2
 */
export declare function square2d(A: Matrix): Matrix;
/**
 * Calculates the total mean value for a given matrix
 *
 * @method mean2d
 * @param {Matrix} A - The target matrix
 * @returns {Number} mean - The total mean of each cell
 * @public
 * @memberOf math
 * @since 0.0.2
 */
export declare function mean2d(A: Matrix): number;
/**
 * Computes the variance for a given array
 *
 * @method variance
 * @param {Array<Number>} values - The target array
 * @param {Number} [avg=average(values)] - If specified, it will use this values as the average of
 * the array values. If not, it will compute the actual average
 * @returns {Number} varx - The resulting variance value
 * @public
 * @memberOf math
 */
export declare function variance(values: number[], avg?: number): number;
/**
 * Computes the covariance between 2 arrays
 *
 * @method covariance
 * @param {Array<Number>} values1 - The first target array
 * @param {Array<Number>} values2 - The second target array
 * @param {Number} [average1=average(values)] - If specified, it will use this values as the average
 * of the first array. If not, it will compute the actual average
 * @param {Number} [average2=average(values)] - If specified, it will use this values as the average
 * of the second array. If not, it will compute the actual average
 * @returns {Number} cov - The resulting covariance
 * @public
 * @memberOf math
 */
export declare function covariance(values1: number[], values2: number[], average1?: number, average2?: number): number;
