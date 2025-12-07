// ============================================
// HeroSection 컴포넌트 : 배경 이미지 + 타이핑 애니메이션 텍스트 표시
// ============================================

import React from 'react';
import useTypewriter from '../../hooks/UseTypewriter';
import './HeroSection.css';

export default function HeroSection() {
    // ============================================
    // 타이핑 애니메이션 로직
    // ============================================

    // useTypewriter 훅으로 텍스트를 한 글자씩 표시 (속도: 100ms)
    const { text, isComplete } = useTypewriter(`" WE\nDON'T\nJUST\nMOVE,\nWE ECHO "`, 100);

    // ============================================
    // UI 렌더링
    // ============================================

    return (
        <>
            {/* 히어로 섹션: 배경 이미지 + 타이핑 텍스트 */}
            <section className="hero-section">
                {/* 배경 이미지 */}
                <img
                    className="hero-image"
                    src={`${process.env.PUBLIC_URL}/img/hero.jpg`}
                    alt="Hero Background"
                />

                {/* 타이핑 텍스트 영역 */}
                <div className="label">
                    <div className={`typewriter-text ${isComplete ? 'finished' : ''}`}>
                        {text}
                        {!isComplete && <span className="cursor">|</span>}
                    </div>
                </div>
            </section>
        </>
    );
}
