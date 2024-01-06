import { Options, Matrix, ImageData } from './types';
export { Options, Matrix };
export declare function getOptions(userOptions?: Partial<Options>): Options;
/**
 * @method ssim - The ssim method. You can call the package directly or through the `ssim` property.
 * @public
 * @example import mod = from 'ssim.js';
 * mod(imgBuffer1, imgBuffer2);
 * mod.ssim(imgBuffer1, imgBuffer2);
 */
export declare function ssim(image1: ImageData, image2: ImageData, userOptions?: Partial<Options>): {
    ssim_map: Matrix;
    mssim: number;
    performance: number;
};
export default ssim;
