// ============================================
// CastSection 컴포넌트 : 이미지 무한 롤링 + 캐스팅 공고 텍스트/버튼 영역
// ============================================

import React from 'react';
import { motion } from 'framer-motion';
import { fadeUpVariant } from '../../styles/Animations';
import Button from '../../components/common/Button';
import './CastSection.css';

export default function CastSection() {
    // ============================================
    // 데이터 정의
    // ============================================

    // 캐스팅 이미지 배열 (4개 이미지)
    const castImages = [
        { id: 1, src: '/img/cast1.jpg', alt: 'Cast 1' },
        { id: 2, src: '/img/cast2.jpg', alt: 'Cast 2' },
        { id: 3, src: '/img/cast3.jpg', alt: 'Cast 3' },
        { id: 4, src: '/img/cast4.jpg', alt: 'Cast 4' },
    ];

    // 무한 루프 효과를 위해 이미지 배열을 2번 반복
    const carouselData = [...castImages, ...castImages];

    // ============================================
    // UI 렌더링
    // ============================================

    return (
        <section id="cast" className="cast-section">

            {/* 이미지 무한 롤링 영역 */}
            <div className="cast-carousel-wrapper">
                {/* CSS 애니메이션으로 계속 움직이는 트랙 */}
                <div className="cast-track">
                    {carouselData.map((item, index) => (
                        <div className="cast-card" key={index}>
                            <img
                                src={`${process.env.PUBLIC_URL}${item.src}`}
                                alt={item.alt}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* 텍스트 및 버튼 영역 */}
            <div className="cast-content-wrapper">
                {/* Scroll 진입 시 페이드업 애니메이션 */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={fadeUpVariant(0.8)}
                >
                    <h2 className="cast-title">Post it. Fill the Stage.</h2>
                    <p className="cast-desc">
                        댄서를 찾고 계신가요?&nbsp;&nbsp;공고를 등록해 연결을 시작하세요.
                    </p>

                    {/* Cast 버튼 */}
                    <Button
                        text="CAST"
                        onClick={() => console.log('Cast button clicked')}
                    />
                </motion.div>
            </div>
        </section>
    );
}
