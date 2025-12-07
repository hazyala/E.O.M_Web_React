// ============================================
// Header 컴포넌트 : 페이지 상단 고정 네비게이션
// ============================================

import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useTheme from '../../hooks/UseTheme';
import './Header.css';

export default function Header() {
    // ============================================
    // 상태 관리 및 라우터 설정
    // ============================================

    // 현재 페이지 경로 확인
    const location = useLocation();
    // 페이지 이동을 위한 네비게이터
    const navigate = useNavigate();
    // 테마 상태 및 토글 함수
    const { theme, toggleTheme } = useTheme();

    // ============================================
    // 이벤트 핸들러 함수
    // ============================================

    /* 섹션 이동 함수: 홈 내 특정 섹션으로 스크롤 이동 */
    const handleSectionClick = (e, sectionId) => {
        e.preventDefault();

        if (location.pathname !== '/') {
            // 현재 페이지가 홈이 아니면 먼저 홈으로 이동
            navigate('/');
            // 페이지 렌더링 시간을 고려해 0.1초 뒤에 스크롤 이동
            setTimeout(() => {
                const element = document.getElementById(sectionId);
                if (element) window.scrollTo({ top: element.offsetTop - 70, behavior: 'smooth' });
            }, 100);
        } else {
            // 이미 홈 페이지면 즉시 스크롤 이동
            const element = document.getElementById(sectionId);
            if (element) window.scrollTo({ top: element.offsetTop - 70, behavior: 'smooth' });
        }
    };

    /* 로고 클릭 시 페이지 최상단으로 이동 */
    const scrollToTop = () => {
        if (location.pathname !== '/') {
            // 홈이 아니면 홈으로 먼저 이동
            navigate('/');
            window.scrollTo(0, 0);
        } else {
            // 홈이면 부드럽게 최상단으로 스크롤
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    // ============================================
    // UI 렌더링
    // ============================================

    return (
        <header className="header">
            {/* 로고 영역: 클릭 시 최상단 이동 */}
            <div className="logo" onClick={scrollToTop}>
                Echo of Movement
            </div>

            {/* 네비게이션 메뉴 */}
            <nav className="navbar">
                <ul>
                    {/* Show 섹션 링크 */}
                    <li>
                        <a href="#show" onClick={(e) => handleSectionClick(e, 'show')}>
                            Show<span className="subtitle">당신을 보여주세요</span>
                        </a>
                    </li>

                    {/* Cast 섹션 링크 */}
                    <li>
                        <a href="#cast" onClick={(e) => handleSectionClick(e, 'cast')}>
                            Cast<span className="subtitle">공연 기회를 만나세요</span>
                        </a>
                    </li>

                    {/* Hype 섹션 링크 */}
                    <li>
                        <a href="#hype" onClick={(e) => handleSectionClick(e, 'hype')}>
                            Hype<span className="subtitle">움직임에 열광을 더하세요</span>
                        </a>
                    </li>

                    {/* Link 섹션 링크 */}
                    <li>
                        <a href="#link" onClick={(e) => handleSectionClick(e, 'link')}>
                            Link<span className="subtitle">세상과 연결되세요</span>
                        </a>
                    </li>

                    {/* 로그인 페이지 링크 (라우터 이동) */}
                    <li>
                        <Link to="/login">
                            Login<span className="subtitle">가입해보세요</span>
                        </Link>
                    </li>

                    {/* 테마 토글 버튼 */}
                    <li>
                        <button className="theme-toggle-button" onClick={toggleTheme}>
                            {theme === 'dark' ? '☀️' : '🌙'}
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
