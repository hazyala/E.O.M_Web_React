import React from 'react';
import { motion } from 'framer-motion';
import './CastSection.css'; // 곧 만들 스타일 파일

export default function CastSection() {
    // 1. 캐스팅 이미지 데이터 정의
    const castImages = [
        { id: 1, src: '/img/cast1.jpg', alt: 'Cast 1' },
        { id: 2, src: '/img/cast2.jpg', alt: 'Cast 2' },
        { id: 3, src: '/img/cast3.jpg', alt: 'Cast 3' },
        { id: 4, src: '/img/cast4.jpg', alt: 'Cast 4' },
    ];

    // 2. 무한 스크롤을 위해 배열을 두 번 복사
    const carouselData = [...castImages, ...castImages];

    // 등장 애니메이션 설정
    const fadeUpVariant = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
    };

    // 제목/설명 텍스트 등장 애니메이션
    const contentVariant = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.8, delay: 0.2 } }
    };

    return (
        <section id="cast" className="cast-section">

            {/* 1. 이미지 무한 롤링 영역 */}
            <div className="cast-carousel-wrapper">
                {/* CSS 애니메이션이 적용될 트랙 */}
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

            {/* 2. 텍스트 및 버튼 영역 */}
            <div className="cast-content-wrapper">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={contentVariant}
                >
                    <h2 className="cast-title">Post it. Fill the Stage.</h2>
                    <p className="cast-desc">
                        댄서를 찾고 계신가요?&nbsp;&nbsp;공고를 등록해 연결을 시작하세요.
                    </p>
                    <motion.button
                        className="show-button"
                        whileHover={{ scale: 1.1, backgroundColor: '#ffffff', color: '#000000' }}
                        whileTap={{ scale: 0.95 }}
                    >
                        CAST
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
}