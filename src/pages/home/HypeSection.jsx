// ============================================
// HypeSection 컴포넌트 : 배틀/이벤트 정보 표시
// ============================================

import React from 'react';
import { motion } from 'framer-motion';
import { slideInLeftVariant, slideInRightVariant } from '../../styles/Animations';
import Button from '../../components/common/Button';
import './HypeSection.css';

export default function HypeSection() {
    // ============================================
    // UI 렌더링
    // ============================================

    return (
        <section id="hype" className="hype-section">
            <div className="hype-container">

                {/* 좌측: 텍스트 + 버튼 영역 */}
                <motion.div
                    className="hype-text"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={slideInLeftVariant(0.8)}
                >
                    {/* 영어 제목 */}
                    <h2 className="headline">
                        Events. <br />
                        Battles. <br />
                        Everything <br />
                        Hype.
                    </h2>

                    {/* 한글 설명 */}
                    <p className="desc">
                        배틀, 행사, 이벤트.<br />
                        이 씬의 모든 하입은 여기에.
                    </p>

                    {/* Hype 섹션 버튼 */}
                    <Button
                        text="HYPE"
                        onClick={() => console.log('Hype button clicked')}
                        style={{ width: 'fit-content' }}
                    />
                </motion.div>

                {/* 우측: 이미지 영역 */}
                <motion.div
                    className="hype-image-wrapper"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={slideInRightVariant(0.8)}
                >
                    <img
                        src={`${process.env.PUBLIC_URL}/img/hype.jpg`}
                        alt="Hype Image"
                    />
                </motion.div>
            </div>
        </section>
    );
}
