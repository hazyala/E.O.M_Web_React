// ============================================
// Footer 컴포넌트 : 페이지 하단 푸터 영역
// ============================================

import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Footer.css';

export default function Footer() {
    // ============================================
    // 애니메이션 설정
    // ============================================

    // 푸터 진입 애니메이션 (스크롤 시 아래에서 위로 등장)
    const footerVariant = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
    };

    // ============================================
    // UI 렌더링
    // ============================================

    return (
        <motion.footer
            className="footer"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={footerVariant}
        >
            {/* 좌측 영역: 로고 + 슬로건 + 아이콘 */}
            <div className="footer-left">
                <div className="footer-logo">Echo of Movement</div>
                <div className="footer-slogan">We don't just move we echo</div>

                {/* 인터랙티브 아이콘 */}
                <div className="footer-icons">
                    <motion.span role="img" aria-label="cat" whileHover={{ scale: 1.3 }}>🐱</motion.span>
                    <motion.span role="img" aria-label="paws" whileHover={{ scale: 1.3 }}>🐾</motion.span>
                    <motion.span role="img" aria-label="smirking-cat" whileHover={{ scale: 1.3 }}>😼</motion.span>
                </div>
            </div>

            {/* 우측 영역: 3단 메뉴 */}
            <div className="footer-columns">
                <div className="footer-column">
                    <div className="footer-column-title">MADE</div>
                    <Link to="#">처음으로</Link>
                    <Link to="#">처음으로</Link>
                    <Link to="#">너무힘듬</Link>
                </div>

                <div className="footer-column">
                    <div className="footer-column-title">BY</div>
                    <Link to="#">혼자 만든</Link>
                    <Link to="#">혼자 만든</Link>
                    <Link to="#">너무 힘듬</Link>
                </div>

                <div className="footer-column">
                    <div className="footer-column-title">HAZYALA</div>
                    <Link to="#">리액트 웹</Link>
                    <Link to="#">리액트 웹</Link>
                    <Link to="#">리액트 웹</Link>
                </div>
            </div>
        </motion.footer>
    );
}
