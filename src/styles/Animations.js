// ============================================
// 애니메이션 설정 : 공통 Framer Motion 을 모든 섹션에서 재사용 가능한 애니메이션으로 제공
// ============================================

// ============================================
// 페이드업 애니메이션 : 아래에서 위로 올라오며 페이드인 효과
// ============================================
export const fadeUpVariant = (duration = 0.8) => ({
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: duration, ease: 'easeOut' }
    }
});

// ============================================
// 좌측 슬라이드인 애니메이션 : 왼쪽에서 오른쪽으로 슬라이드 진입하며 페이드인 효과
// ============================================
export const slideInLeftVariant = (duration = 0.8) => ({
    hidden: { opacity: 0, x: -50 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: duration }
    }
});

// ============================================
// 우측 슬라이드인 애니메이션 : 오른쪽에서 왼쪽으로 슬라이드 진입하며 페이드인 효과
// ============================================
export const slideInRightVariant = (duration = 0.8) => ({
    hidden: { opacity: 0, x: 50 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: duration }
    }
});
