import React from 'react';
import { motion } from 'framer-motion';
import './HypeSection.css'; // 곧 만들 스타일 파일

export default function HypeSection() {

    // 텍스트 등장 애니메이션 설정
    const contentVariant = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
    };

    // 이미지 등장 애니메이션 설정
    const imageVariant = {
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.2 } }
    };

    return (
        <section id="hype" className="hype-section">
            <div className="hype-container">

                {/* 1. 좌측 텍스트 */}
                <motion.div
                    className="hype-text"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={contentVariant}
                >
                    <h2 className="headline">
                        Events. <br />
                        Battles. <br />
                        Everything <br />
                        Hype.
                    </h2>
                    <p className="desc">
                        배틀, 행사, 이벤트.<br />
                        이 씬의 모든 하입은 여기에.
                    </p>
                    <motion.button
                        className="show-button"
                        whileHover={{ scale: 1.1, backgroundColor: '#ffffff', color: '#000000' }}
                        whileTap={{ scale: 0.95 }}
                    >
                        HYPE
                    </motion.button>
                </motion.div>

                {/* 2. 우측 이미지 영역 */}
                <motion.div
                    className="hype-image-wrapper"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={imageVariant}
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