"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const core_1 = require("@mantine/core");
function Layout() {
    const theme = (0, core_1.useMantineTheme)();
    const [opened, setOpened] = (0, react_1.useState)(false);
    return ((0, jsx_runtime_1.jsx)(core_1.AppShell
    // styles={{
    //   main: {
    //     background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
    //   },
    // }}
    , Object.assign({ 
        // styles={{
        //   main: {
        //     background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
        //   },
        // }}
        navbarOffsetBreakpoint: "sm", asideOffsetBreakpoint: "sm", navbar: (0, jsx_runtime_1.jsx)(core_1.Navbar, Object.assign({ p: "md", hiddenBreakpoint: "sm", hidden: !opened, width: { sm: 200, lg: 300 } }, { children: (0, jsx_runtime_1.jsx)(core_1.Text, { children: "Application navbar" }) })), aside: (0, jsx_runtime_1.jsx)(core_1.MediaQuery, Object.assign({ smallerThan: "sm", styles: { display: 'none' } }, { children: (0, jsx_runtime_1.jsx)(core_1.Aside, Object.assign({ p: "md", hiddenBreakpoint: "sm", width: { sm: 200, lg: 300 } }, { children: (0, jsx_runtime_1.jsx)(core_1.Text, { children: "Application sidebar" }) })) })), footer: (0, jsx_runtime_1.jsx)(core_1.Footer, Object.assign({ height: 60, p: "md" }, { children: "Application footer" })), header: (0, jsx_runtime_1.jsx)(core_1.Header, Object.assign({ height: { base: 30, md: 45 }, p: "md" }, { children: (0, jsx_runtime_1.jsxs)("div", Object.assign({ style: { display: 'flex', alignItems: 'center', height: '100%' } }, { children: [(0, jsx_runtime_1.jsx)(core_1.MediaQuery, Object.assign({ largerThan: "sm", styles: { display: 'none' } }, { children: (0, jsx_runtime_1.jsx)(core_1.Burger, { opened: opened, onClick: () => setOpened((o) => !o), size: "sm", color: theme.colors.gray[6], mr: "xl" }) })), (0, jsx_runtime_1.jsx)(core_1.Text, { children: "Application header" })] })) })) }, { children: (0, jsx_runtime_1.jsx)(core_1.Text, { children: "Resize app to see responsive navbar in action" }) })));
}
exports.default = Layout;
