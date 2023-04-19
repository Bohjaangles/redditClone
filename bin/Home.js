"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const core_1 = require("@mantine/core");
function Home() {
    function sayHi() {
        alert("Hello World!");
    }
    return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("h1", Object.assign({ className: "text-3xl font-bold underline" }, { children: "Soon to look a lot like Reddit" }), void 0), (0, jsx_runtime_1.jsx)(core_1.Button, Object.assign({ className: "bg-blue-600", onClick: sayHi }, { children: "Mantine Button" }), void 0)] }, void 0));
}
exports.default = Home;
