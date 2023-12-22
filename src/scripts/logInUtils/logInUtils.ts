// loginUtils.ts

import React, { useState } from 'react';

export const useLoginForm = () => {
    const [loginInfo, setLoginInfo] = useState({
        email: '',
        password: '',
    });

    const [emailValidation, setEmailValidation] = useState({
        isValid: true,
        message: '',
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setLoginInfo((prevInfo) => ({
            ...prevInfo,
            [name]: value,
        }));

        // Check email validity when the email input changes
        if (name === 'email') {
            const isValid = validateEmailRegex(value);
            setEmailValidation({
                isValid,
                message: isValid ? 'Valid email' : 'Invalid email',
            });
        }
    };

    const handleLogIn = (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault();

        // Check email validity before proceeding with login
        if (!emailValidation.isValid) {
            console.log('Invalid email address');
            return;
        }

        console.log('Login Information:', loginInfo);
        // Add any further logic for handling the login (e.g., API calls) here
    };

    // Email validation function using a simple regex
    const validateEmailRegex = (email: string) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    return { loginInfo, emailValidation, handleInputChange, handleLogIn };
};
