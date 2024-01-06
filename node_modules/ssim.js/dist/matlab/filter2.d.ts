import { Matrix, Shape } from '../types';
/**
 * Given a matrix X and a two-dimensional FIR filter h, filter2 rotates your filter matrix 180
 * degrees to create a convolution kernel. It then calls conv2, the two-dimensional convolution
 * function, to implement the filtering operation.
 *
 * This method mimics Matlab's `filter2` method
 *
 * @method filter2
 * @param {Matrix} h - The FIR filter
 * @param {Matrix} X - The input matrix
 * @param string [shape='same'] - The convolution shape
 * @returns {Matrix} conv - The 2D convolution of X with h
 * @public
 * @memberOf matlab
 * @since 0.0.2
 */
export declare function filter2(h: Matrix, X: Matrix, shape?: Shape): Matrix;
