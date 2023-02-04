"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tinyIntToBoolean = exports.nullIfEmptyString = exports.toDate = exports.toDateString = exports.toInt = exports.toFloat = void 0;
const toFloat = (number) => isNaN(number) ? 0 : parseFloat(number);
exports.toFloat = toFloat;
const toInt = (number) => isNaN(number) ? 0 : parseInt(number);
exports.toInt = toInt;
const toDateString = (date) => !date || date == '0000-00-00' ? null : date;
exports.toDateString = toDateString;
const toDate = (dateString) => {
    if (dateString) {
        const date = new Date(dateString);
        return date.getTime() > 0 ? date : null;
    }
    return null;
};
exports.toDate = toDate;
const nullIfEmptyString = (text) => !text || text.trim() === '' ? null : text.trim();
exports.nullIfEmptyString = nullIfEmptyString;
const tinyIntToBoolean = (number) => number == 1;
exports.tinyIntToBoolean = tinyIntToBoolean;
//# sourceMappingURL=PrimitiveConversion.js.map