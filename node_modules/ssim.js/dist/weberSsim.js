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
exports.weberSsim = exports.windowCovariance = exports.windowVariance = exports.windowSums = exports.windowMatrix = exports.partialSumMatrix2 = exports.partialSumMatrix1 = void 0;
function edgeHandler(w, h, sumArray, matrixWidth) {
    var rightEdge = sumArray[h * matrixWidth + w + 1];
    var bottomEdge = sumArray[(h + 1) * matrixWidth + w];
    var bottomRightEdge = sumArray[(h + 1) * matrixWidth + w + 1];
    return { rightEdge: rightEdge, bottomEdge: bottomEdge, bottomRightEdge: bottomRightEdge };
}
function partialSumMatrix1(pixels, f) {
    var width = pixels.width, height = pixels.height, data = pixels.data;
    var matrixWidth = width + 1;
    var matrixHeight = height + 1;
    var sumArray = new Int32Array(matrixWidth * matrixHeight);
    for (var h = height - 1; h >= 0; --h) {
        for (var w = width - 1; w >= 0; --w) {
            var _a = edgeHandler(w, h, sumArray, matrixWidth), rightEdge = _a.rightEdge, bottomEdge = _a.bottomEdge, bottomRightEdge = _a.bottomRightEdge;
            sumArray[h * matrixWidth + w] =
                f(data[h * width + w], w, h) + rightEdge + bottomEdge - bottomRightEdge;
        }
    }
    return { data: sumArray, height: matrixHeight, width: matrixWidth };
}
exports.partialSumMatrix1 = partialSumMatrix1;
function partialSumMatrix2(pixels1, pixels2, f) {
    var width = pixels1.width, height = pixels1.height, data1 = pixels1.data;
    var data2 = pixels2.data;
    var matrixWidth = width + 1;
    var matrixHeight = height + 1;
    var sumArray = new Int32Array(matrixWidth * matrixHeight);
    for (var h = height - 1; h >= 0; --h) {
        for (var w = width - 1; w >= 0; --w) {
            var _a = edgeHandler(w, h, sumArray, matrixWidth), rightEdge = _a.rightEdge, bottomEdge = _a.bottomEdge, bottomRightEdge = _a.bottomRightEdge;
            var offset = h * width + w;
            sumArray[h * matrixWidth + w] =
                f(data1[offset], data2[offset], w, h) +
                    rightEdge +
                    bottomEdge -
                    bottomRightEdge;
        }
    }
    return { data: sumArray, height: matrixHeight, width: matrixWidth };
}
exports.partialSumMatrix2 = partialSumMatrix2;
function windowMatrix(sumMatrix, windowSize, divisor) {
    var matrixWidth = sumMatrix.width, matrixHeight = sumMatrix.height, sumArray = sumMatrix.data;
    var imageWidth = matrixWidth - 1;
    var imageHeight = matrixHeight - 1;
    var windowWidth = imageWidth - windowSize + 1;
    var windowHeight = imageHeight - windowSize + 1;
    var windows = new Int32Array(windowWidth * windowHeight);
    for (var h = 0; h < imageHeight; ++h) {
        for (var w = 0; w < imageWidth; ++w) {
            if (w < windowWidth && h < windowHeight) {
                var sum = 
                // value at (w,h)
                sumArray[matrixWidth * h + w] -
                    // value at (w+windowSize,h) == right side
                    sumArray[matrixWidth * h + w + windowSize] -
                    // value at (w,h+windowSize) == bottom side
                    sumArray[matrixWidth * (h + windowSize) + w] +
                    // value at (w+windowSize, h+windowSize) == bottomRight corner
                    sumArray[matrixWidth * (h + windowSize) + w + windowSize];
                windows[h * windowWidth + w] = sum / divisor;
            }
        }
    }
    return { height: windowHeight, width: windowWidth, data: windows };
}
exports.windowMatrix = windowMatrix;
function windowSums(pixels, windowSize) {
    return windowMatrix(partialSumMatrix1(pixels, function (a) { return a; }), windowSize, 1);
}
exports.windowSums = windowSums;
function windowVariance(pixels, sums, windowSize) {
    var varianceCalculation = function (v) { return v * v; };
    var windowSquared = windowSize * windowSize;
    var varX = windowMatrix(partialSumMatrix1(pixels, varianceCalculation), windowSize, 1);
    for (var i = 0; i < sums.data.length; ++i) {
        var mean = sums.data[i] / windowSquared;
        var sumSquares = varX.data[i] / windowSquared;
        var squareMeans = mean * mean;
        varX.data[i] = 1024 * (sumSquares - squareMeans);
    }
    return varX;
}
exports.windowVariance = windowVariance;
function windowCovariance(pixels1, pixels2, sums1, sums2, windowSize) {
    var covarianceCalculation = function (a, b) { return a * b; };
    var windowSquared = windowSize * windowSize;
    var covXY = windowMatrix(partialSumMatrix2(pixels1, pixels2, covarianceCalculation), windowSize, 1);
    for (var i = 0; i < sums1.data.length; ++i) {
        covXY.data[i] =
            1024 *
                (covXY.data[i] / windowSquared -
                    (sums1.data[i] / windowSquared) * (sums2.data[i] / windowSquared));
    }
    return covXY;
}
exports.windowCovariance = windowCovariance;
/**
 * Generates a SSIM map based on two input image matrices.
 * Weber SSIM is an SSIM algorithm that operates in linear time by building
 * partial sum arrays of values, variances, and covariances, making each lookup
 * performable in constant time and each variance calculation, only performed
 * once.
 *
 * Images must be a 2-Dimensional grayscale image.
 *
 * @method weberSsim
 * @param {ImageMatrix} pixels1 - The reference matrix
 * @param {ImageMatrix} pixels2 - The second matrix to compare against
 * @param {Options} options - The input options parameter
 * @returns {ImageMatrix} ssim_map - A matrix containing the map of computed
 * SSIMs
 * @public
 * @memberOf weberSsim
 */
function weberSsim(pixels1, pixels2, options) {
    var bitDepth = options.bitDepth, k1 = options.k1, k2 = options.k2, windowSize = options.windowSize;
    var L = Math.pow(2, bitDepth) - 1;
    var c1 = k1 * L * (k1 * L);
    var c2 = k2 * L * (k2 * L);
    var windowSquared = windowSize * windowSize;
    var pixels1Rounded = __assign(__assign({}, pixels1), { data: Int32Array.from(pixels1.data, function (v) { return v + 0.5; }) });
    var pixels2Rounded = __assign(__assign({}, pixels2), { data: Int32Array.from(pixels2.data, function (v) { return v + 0.5; }) });
    var sums1 = windowSums(pixels1Rounded, windowSize);
    var variance1 = windowVariance(pixels1Rounded, sums1, windowSize);
    var sums2 = windowSums(pixels2Rounded, windowSize);
    var variance2 = windowVariance(pixels2Rounded, sums2, windowSize);
    var covariance = windowCovariance(pixels1Rounded, pixels2Rounded, sums1, sums2, windowSize);
    var size = sums1.data.length;
    var mssim = 0;
    var ssims = new Array(size);
    for (var i = 0; i < size; ++i) {
        var meanx = sums1.data[i] / windowSquared;
        var meany = sums2.data[i] / windowSquared;
        var varx = variance1.data[i] / 1024;
        var vary = variance2.data[i] / 1024;
        var cov = covariance.data[i] / 1024;
        var na = 2 * meanx * meany + c1;
        var nb = 2 * cov + c2;
        var da = meanx * meanx + meany * meany + c1;
        var db = varx + vary + c2;
        var ssim = (na * nb) / da / db;
        ssims[i] = ssim;
        if (i == 0) {
            mssim = ssim;
        }
        else {
            mssim = mssim + (ssim - mssim) / (i + 1);
        }
    }
    return { data: ssims, width: sums1.width, height: sums1.height, mssim: mssim };
}
exports.weberSsim = weberSsim;
//# sourceMappingURL=weberSsim.js.map