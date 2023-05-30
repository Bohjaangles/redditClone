"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Home_1 = __importDefault(require("@/Home"));
const Test_1 = __importDefault(require("@/Test"));
const Layout_1 = __importDefault(require("@/Layout"));
const Login_1 = __importDefault(require("@/Login"));
const react_router_dom_1 = require("react-router-dom");
function App() {
    // function sayHi(): void {
    //   alert("Hello World!")
    // }
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("nav", { children: (0, jsx_runtime_1.jsxs)("ul", { children: [(0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, Object.assign({ to: "/" }, { children: "Home" })) }), (0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, Object.assign({ to: "/test" }, { children: "test page" })) }), (0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, Object.assign({ to: "/layout" }, { children: "layout" })) })] }) }), (0, jsx_runtime_1.jsxs)(react_router_dom_1.Routes, { children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/", element: (0, jsx_runtime_1.jsx)(Home_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/test", element: (0, jsx_runtime_1.jsx)(Test_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/layout", element: (0, jsx_runtime_1.jsx)(Layout_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: '/login', element: (0, jsx_runtime_1.jsx)(Login_1.default, {}) })] })] }));
}
exports.default = App;
