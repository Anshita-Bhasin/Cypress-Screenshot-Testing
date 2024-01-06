import { Matrix, ImageData } from '../types';
/**
 * Converts an imageData object of { width, height, data } into a 2d matrix [row, column]
 * where the value is the grayscale equivalent of the rgb input.
 *
 * This method mimics Matlab's `rgb2gray` method
 *
 * @method rgb2gray
 * @param {Matrix | ImageData} imageData - The input imageData
 * @returns {Object} grayscale - A grayscale representation of the input image
 * @public
 * @memberOf matlab
 * @since 0.0.2
 */
export declare function rgb2gray({ data: d, width, height, }: Matrix | ImageData): Matrix;
export declare function rgb2grayInteger({ data: d, width, height, }: Matrix | ImageData): Matrix;
