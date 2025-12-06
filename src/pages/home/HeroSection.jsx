import React, { useEffect, useState } from 'react';
import './HeroSection.css';

export default function HeroSection() {
    // 타자기 효과를 위한 상태 관리
    const [text, setText] = useState('');
    const fullText = `“ WE\nDON’T\nJUST\nMOVE,\nWE ECHO ”`;
    const [isTypingComplete, setIsTypingComplete] = useState(false);

    useEffect(() => {
        let index = 0;
        // 0.1초마다 글자 하나씩 추가하는 타이머
        const interval = setInterval(() => {
            // index가 전체 길이보다 작을 때만 실행
            if (index <= fullText.length) {
                // slice를 사용하여 현재 index까지의 문자를 잘라서 보여줌
                setText(fullText.slice(0, index));
                index++;
            } else {
                // 타이핑 다 되면 타이머 종료 및 완료 상태 변경
                clearInterval(interval);
                setIsTypingComplete(true);
            }
        }, 100); // 속도 조절 (100ms)

        // 컴포넌트가 사라질 때 타이머도 같이 정리
        return () => clearInterval(interval);
    }, [fullText]);

    return (
        <>
            <section className="hero-section">
                {/* 배경 이미지 */}
                <img
                    className="hero-image"
                    src={`${process.env.PUBLIC_URL}/img/hero.jpg`}
                    alt="Hero Background"
                />

                {/* 텍스트 영역 */}
                <div className="label">
                    <div className={`typewriter-text ${isTypingComplete ? 'finished' : ''}`}>
                        {text}
                        {/* 커서 깜빡임 효과 (타이핑 중일 때) */}
                        {!isTypingComplete && <span className="cursor">|</span>}
                    </div>
                </div>
            </section>

            {/* 하단 검은색 여백 */}
            <div className="hero-rectangle"></div>
        </>
    );
}