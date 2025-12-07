// ============================================
// useTypewriter 커스텀 훅 : 텍스트를 한 글자씩 순차적으로 출력하는 효과 제공
// ============================================

import { useState, useEffect } from 'react';

export default function useTypewriter(fullText, speed = 100) {

    // 상태관리 : 현재까지 출력된 텍스트
    const [text, setText] = useState('');
    // 상태관리 : 타이핑 완료 여부
    const [isComplete, setIsComplete] = useState(false);

    // ============================================
    // 타이핑 애니메이션 로직
    // ============================================
    useEffect(() => {
        let index = 0;

        // 지정된 속도(ms)마다 한 글자씩 추가
        const interval = setInterval(() => {
            if (index <= fullText.length) {
                // 0부터 index까지의 문자를 추출해 상태 업데이트
                setText(fullText.slice(0, index));
                index++;
            } else {
                // 모든 글자 출력 완료 시 interval 정지 및 완료 상태 표시
                clearInterval(interval);
                setIsComplete(true);
            }
        }, speed);

        // 컴포넌트 언마운트 또는 의존성 변경 시 interval 정리
        return () => clearInterval(interval);
    }, [fullText, speed]);

    // ============================================
    // 반환값
    // ============================================

    return { text, isComplete };
}
