// ============================================
// ShowSection 컴포넌트 : Show 섹션 프로필 이미지 + 설명 텍스트/버튼을 좌우 레이아웃으로 표시
// ============================================

import React from 'react';
import { motion } from 'framer-motion';
import { fadeUpVariant, slideInRightVariant } from '../../styles/Animations';
import Button from '../../components/common/Button';
import './ShowSection.css';

export default function ShowSection() {
    // ============================================
    // UI 렌더링
    // ============================================

    return (
        <section id="show" className="show-section">
            <div className="show-container">

                {/* 좌측: 프로필 이미지 */}
                <motion.div
                    className="show-image-wrapper"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={fadeUpVariant(0.8)}
                >
                    {/* 이미지 hover 시 */}
                    <motion.img
                        src={`${process.env.PUBLIC_URL}/img/show.png`}
                        alt="Show Profile"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                    />
                </motion.div>

                {/* 우측: 텍스트 + 버튼 */}
                <motion.div
                    className="show-content"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={slideInRightVariant(0.8)}
                >
                    {/* 제목 */}
                    <h2 className="show-title">Show Your Profile</h2>

                    {/* 설명 텍스트 */}
                    <p className="show-description">
                        지금, 당신을 보여주세요.<br />
                        누군가가 기다리고 있어요.
                    </p>

                    {/* Show 버튼 */}
                    <Button
                        text="SHOW"
                        style={{ marginTop: '10px' }}
                        onClick={() => console.log('Show button clicked')}
                    />
                </motion.div>
            </div>
        </section>
    );
}
