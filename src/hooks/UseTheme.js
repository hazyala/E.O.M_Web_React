// ============================================
// useTheme 커스텀 훅 : ThemeContext에서 테마 상태와 토글 함수 제공
// ============================================

import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

export default function useTheme() {

    // ThemeContext에서 테마 상태와 토글 함수 가져오기
    const context = useContext(ThemeContext);

    // ThemeProvider 없이 사용되는 경우 에러 발생
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }

    // { theme, toggleTheme } 반환
    return context;
}
