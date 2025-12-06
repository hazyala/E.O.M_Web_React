import React from 'react';
import { motion } from 'framer-motion';
import './LinkSection.css';

export default function LinkSection() {

    // 텍스트 블록 등장 애니메이션
    const leftTextVariant = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
    };

    // 텍스트 블록 등장 애니메이션
    const rightTextVariant = {
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
    };

    // 중앙 버튼 등장 애니메이션
    const buttonVariant = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.6, delay: 0.5 } }
    };

    return (
        <section id="link" className="link-section">

            {/* 1. 배경 이미지 */}
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

            {/* 2. 중앙 컨텐츠 */}
            <div className="link-content">

                {/* 2-1. 좌측 텍스트 (Practice, Together) */}
                <motion.div
                    className="link-left"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={leftTextVariant}
                >
                    <div className="title">Practice,<br />Together</div>
                    <div className="desc">함께 연습할 사람, 지금 찾기</div>
                </motion.div>

                {/* 2-2. 중앙 버튼 (LINK) */}
                <motion.div
                    className="button-wrapper"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={buttonVariant}
                >
                    <motion.button
                        className="show-button"
                        whileHover={{ scale: 1.1, backgroundColor: '#ffffff', color: '#000000' }}
                        whileTap={{ scale: 0.95 }}
                    >
                        LINK
                    </motion.button>
                </motion.div>

                {/* 2-3. 우측 텍스트 (Drop It) */}
                <motion.div
                    className="link-right"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={rightTextVariant}
                >
                    <div className="title">Drop It</div>
                    <div className="desc">당신의 말이 씬을 만듭니다</div>
                </motion.div>
            </div>
        </section>
    );
}