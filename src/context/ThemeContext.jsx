// ============================================
// ThemeContext : 다크/라이트 모드 전환 및 상태 유지
// ============================================

import React, { createContext, useState, useEffect } from 'react';

// 테마 컨텍스트 생성
export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {

    // 테마 상태 관리
    const [theme, setTheme] = useState(
        localStorage.getItem('theme') || 'dark'
    );

    // 이벤트 핸들러 테마 전환 함수 (다크 ↔ 라이트)
    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
    };

    // 사이드 이펙트 (테마 상태 변경 시 실행: 로컬스토리지 저장 및 DOM 속성 업데이트)
    useEffect(() => {
        // 로컬스토리지에 현재 테마 저장
        localStorage.setItem('theme', theme);
        // HTML 루트 요소에 data-theme 속성 설정 (CSS에서 참조)
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    // ============================================
    // 컨텍스트 제공
    // ============================================

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
