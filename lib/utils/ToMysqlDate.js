"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toMysqlDate = void 0;
const toMysqlDate = (date) => {
    let dateString = 'NULL';
    if (date) {
        dateString = new Date(new Date(date.toISOString()).getTime() - date.getTimezoneOffset() * 60000)
            .toISOString()
            .slice(0, 19)
            .replace('T', ' ');
    }
    return dateString;
};
exports.toMysqlDate = toMysqlDate;
//# sourceMappingURL=ToMysqlDate.js.map