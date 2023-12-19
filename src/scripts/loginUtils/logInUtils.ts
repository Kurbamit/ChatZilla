// loginUtils.ts

import React, { useState } from 'react';

export const useLoginForm = () => {
    const [loginInfo, setLoginInfo] = useState({
        email: '',
        password: '',
    });

    const [isValidEmail, setIsValidEmail] = useState(true);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setLoginInfo((prevInfo) => ({
            ...prevInfo,
            [name]: value,
        }));

        // Check email validity when the email input changes
        if (name === 'email') {
            setIsValidEmail(validateEmail(value));
        }
    };

    const handleLogIn = (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault();

        // Check email validity before proceeding with login
        if (!isValidEmail) {
            console.log('Invalid email address');
            return;
        }

        console.log('Login Information:', loginInfo);
        // Add any further logic for handling the login (e.g., API calls) here
    };

    // Email validation function using a simple regex
    const validateEmail = (email: string) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    return { loginInfo, isValidEmail, handleInputChange, handleLogIn };
};
