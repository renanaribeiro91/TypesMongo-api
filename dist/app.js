"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./server");
const port = process.env.PORT || 3050;
server_1.default.listen(port, () => {
    console.log("conected");
});
