import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';

// 레이아웃 컴포넌트 불러오기
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

// 페이지 불러오기
import Home from './pages/home/Home';
import Login from './pages/login/Login';

function App() {
    return (
        <ThemeProvider>
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <Header />

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                </Routes>

                <Footer />
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;