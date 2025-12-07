// ============================================
// App 컴포넌트 : 루트 컴포넌트
// ============================================

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/home/Home';
import Login from './pages/login/Login';

function App() {
    // ============================================
    // 애플리케이션 구조
    // ============================================

    return (
        // 전역 라이트모드 다크모드 제공
        <ThemeProvider>
            {/* 라우터 설정 */}
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                {/* 공통 헤더 */}
                <Header />

                {/* 페이지 라우트 */}
                <Routes>
                    {/* 홈 페이지 */}
                    <Route path="/" element={<Home />} />
                    {/* 로그인/회원가입 페이지 */}
                    <Route path="/login" element={<Login />} />
                </Routes>

                {/* 공통 푸터 */}
                <Footer />
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
