import React from 'react';
import { motion } from 'framer-motion';
import './ShowSection.css';


export default function ShowSection() {

    // 등장 애니메이션 설정 (아래에서 위로)
    const fadeUpVariant = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
    };

    return (
        <section id="show" className="show-section">
            <div className="show-container">
                {/* 1. 이미지 영역 */}
                <motion.div
                    className="show-image-wrapper"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={fadeUpVariant}
                >
                    {/* 마우스 올리면 사진이 살짝 확대되는 효과 */}
                    <motion.img
                        src={`${process.env.PUBLIC_URL}/img/show.png`}
                        alt="Show Profile"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                    />
                </motion.div>

                {/* 2. 텍스트 영역 */}
                <motion.div
                    className="show-content"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={{
                        hidden: { opacity: 0, x: 50 },
                        visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.2 } }
                    }}
                >
                    <h2 className="show-title">Show Your Profile</h2>
                    <p className="show-description">
                        지금, 당신을 보여주세요.<br />
                        누군가가 기다리고 있어요.
                    </p>

                    <motion.button
                        className="show-button"
                        whileHover={{ scale: 1.1, backgroundColor: '#ffffff', color: '#000000' }}
                        whileTap={{ scale: 0.95 }}
                    >
                        SHOW
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
}