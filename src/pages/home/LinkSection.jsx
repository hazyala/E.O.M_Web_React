// ============================================
// LinkSection 컴포넌트 : 커뮤니티 관련 좌우 텍스트 + 중앙 버튼 + 배경 이미지를 통합 레이아웃으로 표시
// ============================================

import React from 'react';
import { motion } from 'framer-motion';
import { slideInLeftVariant, slideInRightVariant, fadeUpVariant } from '../../styles/Animations';
import Button from '../../components/common/Button';
import './LinkSection.css';

export default function LinkSection() {
    // ============================================
    // UI 렌더링
    // ============================================

    return (
        <section id="link" className="link-section">

            {/* 배경 이미지: 확대/축소 애니메이션으로 등장 */}
            <motion.div
                className="link-background"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1, transition: { duration: 1, ease: "easeOut" } }}
                viewport={{ once: true, amount: 0.1 }}
            >
                <img
                    src={`${process.env.PUBLIC_URL}/img/link.png`}
                    alt="Link Background Image"
                />
            </motion.div>

            {/* 중앙 콘텐츠: 좌측 텍스트 + 중앙 버튼 + 우측 텍스트 */}
            <div className="link-content">

                {/* 좌측 텍스트: 왼쪽에서 슬라이드 진입 */}
                <motion.div
                    className="link-left"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={slideInLeftVariant(0.8)}
                >
                    <div className="title">Practice,<br />Together</div>
                    <div className="desc">함께 연습할 사람, 지금 찾기.</div>
                </motion.div>

                {/* 중앙 버튼: 페이드업 애니메이션으로 등장 */}
                <motion.div
                    className="button-wrapper"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={fadeUpVariant(0.6)}
                >
                    <Button
                        text="LINK"
                        onClick={() => console.log('Link button clicked')}
                    />
                </motion.div>

                {/* 우측 텍스트: 오른쪽에서 슬라이드 진입 */}
                <motion.div
                    className="link-right"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={slideInRightVariant(0.8)}
                >
                    <div className="title">Drop It</div>
                    <div className="desc">당신의 말이 씬을 만듭니다.</div>
                </motion.div>
            </div>
        </section>
    );
}
