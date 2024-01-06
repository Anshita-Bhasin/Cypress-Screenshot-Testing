import { Matrix, Options } from './types';
/**
 * Determines the downsizing algorithm to implement (if any) to the reference and target images
 *
 * @method downsample
 * @param {[Matrix, Matrix]} pixels - The first and second matrices to downsample
 * @param {Object} options - The inputs options object
 * @returns {[Matrix, Matrix]} pixels - An array containing the 2 downsized images
 * @public
 * @memberOf downsample
 */
export declare function downsample(pixels: [Matrix, Matrix], options: Options): [Matrix, Matrix];
