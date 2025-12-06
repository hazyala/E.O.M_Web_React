import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useTheme from '../../hooks/UseTheme';
import './Header.css';

export default function Header() {
    const location = useLocation(); // 현재 페이지 위치 확인
    const navigate = useNavigate(); // 페이지 이동을 위한 네비게이터

    const { theme, toggleTheme } = useTheme();


    // 1. 섹션 이동 함수
    const handleSectionClick = (e, sectionId) => {
        e.preventDefault();

        if (location.pathname !== '/') {
            // 1) 만약 홈이 아니라면, 홈으로 먼저 이동
            navigate('/');
            // 2) 페이지 이동 시간을 고려해서 0.1초 뒤에 스크롤 이동
            setTimeout(() => {
                const element = document.getElementById(sectionId);
                if (element) window.scrollTo({ top: element.offsetTop - 70, behavior: 'smooth' });
            }, 100);
        } else {
            // 3) 이미 홈이라면, 그냥 부드럽게 스크롤만 이동
            const element = document.getElementById(sectionId);
            if (element) window.scrollTo({ top: element.offsetTop - 70, behavior: 'smooth' });
        }
    };

    // 2. 로고 클릭 시 최상단 이동
    const scrollToTop = () => {
        if (location.pathname !== '/') {
            navigate('/');
            window.scrollTo(0, 0);
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    return (
        <header className="header">
            <div className="logo" onClick={scrollToTop}>
                Echo of Movement
            </div>

            <nav className="navbar">
                <ul>
                    <li>
                        <a href="#show" onClick={(e) => handleSectionClick(e, 'show')}>
                            Show<span className="subtitle">당신을 보여주세요</span>
                        </a>
                    </li>
                    <li>
                        <a href="#cast" onClick={(e) => handleSectionClick(e, 'cast')}>
                            Cast<span className="subtitle">공연 기회를 만나세요</span>
                        </a>
                    </li>
                    <li>
                        <a href="#hype" onClick={(e) => handleSectionClick(e, 'hype')}>
                            Hype<span className="subtitle">움직임에 열광을 더하세요</span>
                        </a>
                    </li>
                    <li>
                        <a href="#link" onClick={(e) => handleSectionClick(e, 'link')}>
                            Link<span className="subtitle">세상과 연결되세요</span>
                        </a>
                    </li>
                    <li>
                        {/* 로그인 페이지는 별도 페이지이므로 Link 컴포넌트 사용해서 라우터로 이동 */}
                        <Link to="/login">
                            Login<span className="subtitle">가입해보세요</span>
                        </Link>
                    </li>
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