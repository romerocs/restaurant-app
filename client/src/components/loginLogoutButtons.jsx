import React, { useState, useEffect } from "react";
import Button from './button';
import sizes from '../style-settings/scale';
import { buttonThemes } from '../style-settings/colors';

function LoginLogoutButtons({ login, logout, authenticated }) {
    const LoginButton = () => <Button
        text="Login"
        style={{ padding: sizes.xsmall }}
        handler={login}
        theme={buttonThemes.secondary} />;


    const LogoutButton = () => <Button
        text="Logout"
        style={{ padding: sizes.xsmall }}
        handler={logout}
        theme={buttonThemes.secondary} />;

    if (authenticated === null) return null;

    return authenticated ? <LogoutButton /> : <LoginButton />;
}

export default LoginLogoutButtons;