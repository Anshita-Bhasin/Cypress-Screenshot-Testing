"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Implements Matlab functions or functionality.
 *
 * The goal here is not a perfect reproduction of matlab logic but just a minimal implementation
 * needed to correctly reproduce the SSIM matlab script.
 *
 * That means that functionality used will be implemented but additional / unused parameters will
 * not.
 *
 * @namespace matlab
 */
__exportStar(require("./conv2"), exports);
__exportStar(require("./filter2"), exports);
__exportStar(require("./fspecial"), exports);
__exportStar(require("./imfilter"), exports);
__exportStar(require("./normpdf"), exports);
__exportStar(require("./ones"), exports);
__exportStar(require("./padarray"), exports);
__exportStar(require("./rgb2gray"), exports);
__exportStar(require("./skip2d"), exports);
__exportStar(require("./sub"), exports);
__exportStar(require("./transpose"), exports);
__exportStar(require("./zeros"), exports);
//# sourceMappingURL=index.js.map