"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertEnvToBoolean = void 0;
const convertEnvToBoolean = (value) => {
    if (value) {
        value = value.trim();
        if (/^(?:y|yes|true|1|on)$/i.test(value)) {
            return true;
        }
    }
    return false;
};
exports.convertEnvToBoolean = convertEnvToBoolean;
//# sourceMappingURL=ConvertEnvToBoolean.js.map