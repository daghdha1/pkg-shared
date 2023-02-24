"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Provider = exports.appConstants = void 0;
exports.appConstants = {
    appName: "tracking-lab",
};
var Provider;
(function (Provider) {
    Provider["MySQL"] = "MYSQL";
    Provider["Knex"] = "KNEX";
    Provider["Mongo"] = "MONGO";
    Provider["Redis"] = "REDIS";
    Provider["Kafka"] = "KAFKA";
})(Provider = exports.Provider || (exports.Provider = {}));
//# sourceMappingURL=app.constants.js.map