// loginUtils.ts

import React, { useState } from 'react';

export const useLoginForm = () => {
    const [loginInfo, setLoginInfo] = useState({
        emailOrUsername: '',
        password: '',
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setLoginInfo((prevInfo) => ({
            ...prevInfo,
            [name]: value,
        }));
    };

    const handleSignIn = (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        console.log('Login Information:', loginInfo);
        // Add any further logic for handling the login (e.g., API calls) here
    };

    return { loginInfo, handleInputChange, handleSignIn };
};
