import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Footer.css';

export default function Footer() {
    // 푸터 내용 등장 애니메이션
    const footerVariant = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
    };

    return (
        <motion.footer
            className="footer"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={footerVariant}
        >
            <div className="footer-left">
                <div className="footer-logo">Echo of Movement</div>
                <div className="footer-slogan">We don’t just move we echo</div>

                <div className="footer-icons">
                    <motion.span role="img" aria-label="cat" whileHover={{ scale: 1.3 }}>🐱</motion.span>
                    <motion.span role="img" aria-label="paws" whileHover={{ scale: 1.3 }}>🐾</motion.span>
                    <motion.span role="img" aria-label="smirking-cat" whileHover={{ scale: 1.3 }}>😼</motion.span>
                </div>
            </div>

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