"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.transferSol = void 0;
var web3_js_1 = require("@solana/web3.js");
var show_balance_1 = require("../show-balance");
var transferSol = function (from, to, amount) { return __awaiter(void 0, void 0, void 0, function () {
    var connection, transaction, instruction;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                connection = new web3_js_1.Connection("http://127.0.0.1:8899", "confirmed");
                transaction = new web3_js_1.Transaction();
                instruction = web3_js_1.SystemProgram.transfer({
                    fromPubkey: from.publicKey,
                    toPubkey: to,
                    lamports: web3_js_1.LAMPORTS_PER_SOL * amount
                });
                transaction.add(instruction);
                return [4 /*yield*/, (0, web3_js_1.sendAndConfirmTransaction)(connection, transaction, [
                        from
                    ])];
            case 1:
                _a.sent();
                console.log("Done!");
                return [2 /*return*/];
        }
    });
}); };
exports.transferSol = transferSol;
// Creating KeyPair
var secret = Uint8Array.from([28, 251, 187, 44, 10, 26, 131, 33, 9, 97, 61, 68, 109, 247, 76, 91, 26, 77, 178, 189, 15, 131, 127, 198, 75, 222, 253, 111, 218, 92, 1, 36, 210, 210, 151, 233, 93, 67, 61, 3, 55, 107, 212, 5, 236, 6, 1, 58, 35, 80, 44, 187, 46, 153, 41, 234, 92, 147, 125, 12, 192, 60, 226, 171]);
var fromKeypair = web3_js_1.Keypair.fromSecretKey(secret);
var toPublicKey = new web3_js_1.PublicKey("7B6sQdQ8YW2qLUBwpt7JRzVumZc4FvBWT8YjxmJqVM9w");
(function () { return __awaiter(void 0, void 0, void 0, function () {
    var initBalance, initBalanceto, initBalance2, initBalanceto2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, show_balance_1.showBalance)(fromKeypair.publicKey)];
            case 1:
                initBalance = _a.sent();
                console.log("Initial Balance of from wallet is ".concat(initBalance));
                return [4 /*yield*/, (0, show_balance_1.showBalance)(toPublicKey)];
            case 2:
                initBalanceto = _a.sent();
                console.log("Initial Balance of to wallet is ".concat(initBalanceto));
                return [4 /*yield*/, (0, exports.transferSol)(fromKeypair, toPublicKey, 2)];
            case 3:
                _a.sent();
                return [4 /*yield*/, (0, show_balance_1.showBalance)(fromKeypair.publicKey)];
            case 4:
                initBalance2 = _a.sent();
                console.log("Initial Balance of from wallet is ".concat(initBalance2));
                return [4 /*yield*/, (0, show_balance_1.showBalance)(toPublicKey)];
            case 5:
                initBalanceto2 = _a.sent();
                console.log("Initial Balance of to wallet is ".concat(initBalanceto2));
                return [2 /*return*/];
        }
    });
}); })();
