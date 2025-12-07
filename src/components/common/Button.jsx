// ============================================
// Button 컴포넌트 : home 페이지에서 사용되는 테마 기반 재사용 버튼
// ============================================

import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { ThemeContext } from '../../context/ThemeContext';
import './Button.css';

export default function Button({ text, onClick, className = '', style = {} }) {
    // ============================================
    // 테마 상태관리 설정
    // ============================================
    const { theme } = useContext(ThemeContext);

    // 현재 테마에 따른 동적 색상 결정
    const textColor = theme === 'dark' ? '#ffffff' : '#000000';
    const hoverBgColor = theme === 'dark' ? '#ffffff' : '#000000';
    const hoverTextColor = theme === 'dark' ? '#000000' : '#ffffff';

    // ============================================
    // UI 렌더링
    // ============================================
    return (
        <motion.button
            className={`show-button ${className}`}
            style={{ color: textColor, ...style }}
            onClick={onClick}
            whileHover={{
                scale: 1.1,
                backgroundColor: hoverBgColor,
                color: hoverTextColor
            }}
            whileTap={{ scale: 0.95 }}
        >
            {text}
        </motion.button>
    );
}
