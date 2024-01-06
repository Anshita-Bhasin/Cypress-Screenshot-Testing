"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ssim = exports.getOptions = void 0;
/**
 * SSIM External API
 *
 * @module main
 */
var matlab_1 = require("./matlab");
var math_1 = require("./math");
var ssim_1 = require("./ssim");
var originalSsim_1 = require("./originalSsim");
var bezkrovnySsim_1 = require("./bezkrovnySsim");
var downsample_1 = require("./downsample");
var defaults_1 = require("./defaults");
var weberSsim_1 = require("./weberSsim");
var ssimTargets = {
    fast: ssim_1.ssim,
    original: originalSsim_1.originalSsim,
    bezkrovny: bezkrovnySsim_1.bezkrovnySsim,
    weber: weberSsim_1.weberSsim,
};
function validateOptions(options) {
    Object.keys(options).forEach(function (option) {
        if (!(option in defaults_1.defaults)) {
            throw new Error("\"" + option + "\" is not a valid option");
        }
    });
    if ('k1' in options && (typeof options.k1 !== 'number' || options.k1 < 0)) {
        throw new Error("Invalid k1 value. Default is " + defaults_1.defaults.k1);
    }
    if ('k2' in options && (typeof options.k2 !== 'number' || options.k2 < 0)) {
        throw new Error("Invalid k2 value. Default is " + defaults_1.defaults.k2);
    }
    if (!(options.ssim in ssimTargets)) {
        throw new Error("Invalid ssim option (use: " + Object.keys(ssimTargets).join(', ') + ")");
    }
}
function getOptions(userOptions) {
    var options = __assign(__assign({}, defaults_1.defaults), userOptions);
    validateOptions(options);
    return options;
}
exports.getOptions = getOptions;
function validateDimensions(_a) {
    var pixels1 = _a[0], pixels2 = _a[1], options = _a[2];
    if (pixels1.width !== pixels2.width || pixels1.height !== pixels2.height) {
        throw new Error('Image dimensions do not match');
    }
    return [pixels1, pixels2, options];
}
function toGrayScale(_a) {
    var pixels1 = _a[0], pixels2 = _a[1], options = _a[2];
    if (options.rgb2grayVersion === 'original') {
        return [matlab_1.rgb2gray(pixels1), matlab_1.rgb2gray(pixels2), options];
    }
    else {
        return [matlab_1.rgb2grayInteger(pixels1), matlab_1.rgb2grayInteger(pixels2), options];
    }
}
function toResize(_a) {
    var pixels1 = _a[0], pixels2 = _a[1], options = _a[2];
    var pixels = downsample_1.downsample([pixels1, pixels2], options);
    return [pixels[0], pixels[1], options];
}
function comparison(_a) {
    var pixels1 = _a[0], pixels2 = _a[1], options = _a[2];
    return ssimTargets[options.ssim](pixels1, pixels2, options);
}
/**
 * @method ssim - The ssim method. You can call the package directly or through the `ssim` property.
 * @public
 * @example import mod = from 'ssim.js';
 * mod(imgBuffer1, imgBuffer2);
 * mod.ssim(imgBuffer1, imgBuffer2);
 */
function ssim(image1, image2, userOptions) {
    var start = new Date().getTime();
    var options = getOptions(userOptions);
    var ssimMap = comparison(toResize(toGrayScale(validateDimensions([image1, image2, options]))));
    var mssim = ssimMap.mssim !== undefined
        ? ssimMap.mssim
        : math_1.mean2d(ssimMap);
    return {
        mssim: mssim,
        ssim_map: ssimMap,
        performance: new Date().getTime() - start,
    };
}
exports.ssim = ssim;
exports.default = ssim;
//# sourceMappingURL=index.js.map