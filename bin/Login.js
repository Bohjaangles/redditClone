"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const core_1 = require("@mantine/core");
function Login() {
    const [isRegistered, setIsRegistered] = (0, react_1.useState)(true);
    const [formValues, setFormValues] = (0, react_1.useState)({ email: '', password: '', confirmPassword: '' });
    const handleChangeIsRegistered = () => {
        setIsRegistered(!isRegistered);
    };
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormValues((prev) => (Object.assign(Object.assign({}, prev), { [name]: value })));
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('email: ', formValues.email);
        console.log('password: ', formValues.password);
    };
    return ((0, jsx_runtime_1.jsx)("div", { children: isRegistered === true ?
            (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(core_1.Text, { children: "Log In" }), (0, jsx_runtime_1.jsxs)("form", Object.assign({ onSubmit: handleSubmit }, { children: [(0, jsx_runtime_1.jsx)(core_1.TextInput, { label: "Email", name: 'email', placeholder: "Enter your email", value: formValues.email, onChange: handleChange, required: true }), (0, jsx_runtime_1.jsx)(core_1.PasswordInput, { label: "Password", name: 'password', placeholder: "Enter your password", value: formValues.password, onChange: handleChange, required: true }), (0, jsx_runtime_1.jsx)(core_1.Button, Object.assign({ onClick: handleChangeIsRegistered }, { children: "Not yet registered?" })), (0, jsx_runtime_1.jsx)(core_1.Button, Object.assign({ type: "submit" }, { children: "Submit" }))] }))] })
            :
                (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(core_1.Text, { children: "Register" }), (0, jsx_runtime_1.jsxs)("form", Object.assign({ onSubmit: handleSubmit }, { children: [(0, jsx_runtime_1.jsx)(core_1.TextInput, { label: "Email", name: 'email', placeholder: "Enter your email", value: formValues.email, onChange: handleChange, required: true }), (0, jsx_runtime_1.jsx)(core_1.PasswordInput, { label: "Password", name: 'password', placeholder: "Enter your password", value: formValues.password, onChange: handleChange, required: true }), (0, jsx_runtime_1.jsx)(core_1.PasswordInput, { label: "Confirm Password", name: 'Confirmpassword', placeholder: "Re-enter your password", value: formValues.confirmPassword, onChange: handleChange, required: true }), (0, jsx_runtime_1.jsx)(core_1.Button, Object.assign({ onClick: handleChangeIsRegistered }, { children: "Already registered?" })), (0, jsx_runtime_1.jsx)(core_1.Button, Object.assign({ type: "submit" }, { children: "Submit" }))] }))] }) }));
}
exports.default = Login;
