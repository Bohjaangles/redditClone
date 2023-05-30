"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const core_1 = require("@mantine/core");
const react_hook_form_1 = require("react-hook-form");
function Login() {
    const [isRegistered, setIsRegistered] = (0, react_1.useState)(true);
    const { handleSubmit, control, register, formState: { errors }, getValues, } = (0, react_hook_form_1.useForm)({
        defaultValues: {
            email: '',
            password: '',
            confirmPassword: '',
        },
    });
    const handleChangeIsRegistered = () => {
        setIsRegistered(!isRegistered);
    };
    const onSubmit = (data) => {
        console.log('email: ', data.email);
        console.log('password: ', data.password);
    };
    return ((0, jsx_runtime_1.jsx)("div", { children: !!isRegistered ?
            (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(core_1.Text, { children: "Log In" }), (0, jsx_runtime_1.jsxs)("form", Object.assign({ onSubmit: handleSubmit(onSubmit) }, { children: [(0, jsx_runtime_1.jsx)(core_1.TextInput, Object.assign({}, register("email", {
                                required: 'Email is required',
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                    message: 'Invalid email address'
                                }
                            }), { label: "Email", placeholder: "Enter your email", required: true })), errors.email && (0, jsx_runtime_1.jsx)("p", Object.assign({ className: "tw-text-red-500 tw-text-sm" }, { children: errors.email.message })), (0, jsx_runtime_1.jsx)(core_1.PasswordInput, Object.assign({}, register("password", {
                                required: 'password is required',
                                minLength: {
                                    value: 8,
                                    message: 'password must include at least 8 characters'
                                }
                            }), { label: 'Password', placeholder: 'Password', required: true })), errors.password && (0, jsx_runtime_1.jsx)("p", Object.assign({ className: "tw-text-red-500 tw-text-sm" }, { children: errors.password.message })), (0, jsx_runtime_1.jsx)(core_1.Button, Object.assign({ className: 'tw-ml-auto tw-mt-2 tw-mr-9 tw-bg-orange-600 tw-rounded-full hover:tw-bg-orange-500', type: "submit" }, { children: "Submit" })), (0, jsx_runtime_1.jsx)(core_1.Button, Object.assign({ className: 'tw-ml-auto tw-mt-2 tw-mr-9 tw-bg-orange-600 tw-rounded-full hover:tw-bg-orange-500', onClick: handleChangeIsRegistered }, { children: "Not yet registered?" }))] }))] })
            :
                (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(core_1.Text, { children: "Register" }), (0, jsx_runtime_1.jsxs)("form", Object.assign({ onSubmit: handleSubmit(onSubmit) }, { children: [(0, jsx_runtime_1.jsx)(core_1.TextInput, Object.assign({}, register("email", {
                                    required: 'Email is required',
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                        message: 'Invalid email address'
                                    }
                                }), { label: "Email", placeholder: "Enter your email", required: true })), errors.email && (0, jsx_runtime_1.jsx)("p", Object.assign({ className: "tw-text-red-500 tw-text-sm" }, { children: errors.email.message })), (0, jsx_runtime_1.jsx)(core_1.PasswordInput, Object.assign({}, register("password", {
                                    required: 'password is required',
                                    minLength: {
                                        value: 8,
                                        message: 'password must include at least 8 characters'
                                    }
                                }), { label: 'Password', placeholder: 'Password', required: true })), errors.password && (0, jsx_runtime_1.jsx)("p", Object.assign({ className: "tw-text-red-500 tw-text-sm" }, { children: errors.password.message })), (0, jsx_runtime_1.jsx)(core_1.PasswordInput, Object.assign({}, register('confirmPassword', {
                                    required: 'must confirm password',
                                    validate: value => value === getValues().password || "Passwords do not match :(",
                                }), { label: "Confirm Password", placeholder: 'Re-enter your password', required: true })), errors.confirmPassword && (0, jsx_runtime_1.jsx)("p", Object.assign({ className: "tw-text-red-500 tw-text-sm" }, { children: errors.confirmPassword.message })), (0, jsx_runtime_1.jsx)(core_1.Button, Object.assign({ className: 'tw-ml-auto tw-mt-2 tw-mr-9 tw-bg-orange-600 tw-rounded-full hover:tw-bg-orange-500', type: "submit" }, { children: "Submit" })), (0, jsx_runtime_1.jsx)(core_1.Button, Object.assign({ className: 'tw-ml-auto tw-mt-2 tw-mr-9 tw-bg-orange-600 tw-rounded-full hover:tw-bg-orange-500', onClick: handleChangeIsRegistered }, { children: "Already registered?" }))] }))] }) }));
}
exports.default = Login;
