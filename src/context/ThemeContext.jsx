import React, { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    // 기본값 'dark'
    const [theme, setTheme] = useState(
        localStorage.getItem('theme') || 'dark'
    );

    // 테마 전환 함수
    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
    };

    // 3. theme 상태가 변경될 때마다 실행되는 로직
    useEffect(() => {
        // 로컬 스토리지에 테마 저장
        localStorage.setItem('theme', theme);
        document.documentElement.setAttribute('data-theme', theme);

    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};