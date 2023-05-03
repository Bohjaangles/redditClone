"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const core_1 = require("@mantine/core");
const react_1 = require("react");
const core_2 = require("@mantine/core");
const Login_1 = __importDefault(require("./Login"));
const bread_png_1 = __importDefault(require("./assets/bread.png"));
const hooks_1 = require("@mantine/hooks");
function Home() {
    const theme = (0, core_2.useMantineTheme)();
    const [opened, setOpened] = (0, react_1.useState)(false);
    const [modalOpened, { open, close }] = (0, hooks_1.useDisclosure)(false);
    const sayHi = () => {
        alert("Hello World!");
    };
    return ((0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsxs)(core_2.AppShell
        // styles={{
        //   // main: {
        //   //   background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
        //   // },
        // }}
        , Object.assign({ 
            // styles={{
            //   // main: {
            //   //   background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
            //   // },
            // }}
            navbarOffsetBreakpoint: "sm", asideOffsetBreakpoint: "sm", 
            // Navbar is actually the sidebar - called navbar in mantine for whatever reason
            navbar: (0, jsx_runtime_1.jsx)(core_2.Navbar, Object.assign({ p: "md", hiddenBreakpoint: "sm", hidden: !opened, width: { sm: 200, lg: 245 } }, { children: (0, jsx_runtime_1.jsx)(core_2.Text, { children: "Application navbar" }) })), 
            // Aside is the right hand sidebar
            aside: (0, jsx_runtime_1.jsx)(core_2.MediaQuery, Object.assign({ smallerThan: "sm", styles: { display: 'none' } }, { children: (0, jsx_runtime_1.jsx)(core_2.Aside, Object.assign({ p: "md", hiddenBreakpoint: "sm", width: { sm: 200, lg: 300 } }, { children: (0, jsx_runtime_1.jsx)(core_2.Text, { children: "Application sidebar" }) })) })), footer: (0, jsx_runtime_1.jsx)(core_2.Footer, Object.assign({ height: 60, p: "md" }, { children: "Application footer" })), 
            // Header here is the navbar, when the viewport becomes small enough, most of the sidebar "navbar in Mantine" becomes a hamburger menu in Header
            header: (0, jsx_runtime_1.jsx)(core_2.Header, Object.assign({ height: { base: 30, md: 45 }, p: "md" }, { children: (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: 'flex', style: { display: 'flex', alignItems: 'center', height: '100%' } }, { children: [(0, jsx_runtime_1.jsx)(core_2.MediaQuery, Object.assign({ largerThan: "sm", styles: { display: 'none' } }, { children: (0, jsx_runtime_1.jsx)(core_2.Burger, { opened: opened, onClick: () => setOpened((o) => !o), size: "sm", color: theme.colors.gray[6], mr: "xl" }) })), (0, jsx_runtime_1.jsx)("img", { className: 'ml-2', src: bread_png_1.default, alt: "Bread", style: { height: '20px', width: '20px' } }), (0, jsx_runtime_1.jsx)(core_2.Text, Object.assign({ className: 'ml-2' }, { children: "Breaddit" })), (0, jsx_runtime_1.jsx)(core_1.Button, Object.assign({ className: 'ml-auto mr-9 bg-orange-600 rounded-full hover:bg-orange-500', onClick: open }, { children: "Log In" }))] })) })) }, { children: [(0, jsx_runtime_1.jsx)(core_2.Modal, Object.assign({ opened: modalOpened, onClose: close, title: "Log In / Register", centered: true }, { children: (0, jsx_runtime_1.jsx)(Login_1.default, {}) })), (0, jsx_runtime_1.jsx)("h1", Object.assign({ className: "text-3xl font-bold underline" }, { children: "Soon to look a lot like Reddit" })), (0, jsx_runtime_1.jsx)(core_1.Button, Object.assign({ className: "bg-blue-600", onClick: sayHi }, { children: "Mantine Button" }))] })) }));
}
exports.default = Home;
