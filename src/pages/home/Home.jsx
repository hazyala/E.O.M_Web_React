// ============================================
// Home 컴포넌트 : 홈 페이지의 모든 섹션을 조합하여 표시
// ============================================

import React from 'react';
import HeroSection from './HeroSection';
import ShowSection from './ShowSection';
import CastSection from './CastSection';
import HypeSection from './HypeSection';
import LinkSection from './LinkSection';

export default function Home() {
    // ============================================
    // UI 렌더링
    // ============================================

    return (
        <main>
            {/* 히어로 섹션: 타이핑 애니메이션 + 배경 이미지 */}
            <HeroSection />

            {/* Show 섹션: 댄서 프로필 */}
            <ShowSection />

            {/* Cast 섹션: 캐스팅 공고 */}
            <CastSection />

            {/* Hype 섹션: 행사 공고 */}
            <HypeSection />

            {/* Link 섹션: 커뮤니티 */}
            <LinkSection />
        </main>
    );
}
