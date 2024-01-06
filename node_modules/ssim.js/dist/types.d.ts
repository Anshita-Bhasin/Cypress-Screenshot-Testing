export declare type Options = {
    rgb2grayVersion: 'original' | 'integer';
    k1: number;
    k2: number;
    ssim: 'fast' | 'original' | 'bezkrovny' | 'weber';
    windowSize: number;
    bitDepth: number;
    downsample: 'original' | 'fast' | false;
    maxSize?: number;
};
export declare type Matrix = {
    width: number;
    height: number;
    data: number[];
};
export declare type ImageData = {
    readonly data: Uint8ClampedArray;
    readonly height: number;
    readonly width: number;
};
export declare type ImageMatrix = Matrix | ImageData | {
    width: number;
    height: number;
    data: Uint8Array | Int8Array | Uint32Array | Int32Array | Uint16Array;
};
export declare type MSSIMMatrix = Matrix & {
    mssim: number;
};
export declare type Shape = 'full' | 'same' | 'valid';
export declare type Images = [ImageData, ImageData, Options];
export declare type Matrices = [Matrix, Matrix, Options];
