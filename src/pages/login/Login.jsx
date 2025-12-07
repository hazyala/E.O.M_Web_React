// ============================================
// Login 컴포넌트 : 로그인/회원가입 폼을 슬라이드 전환으로 제공
// ============================================

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import useTypewriter from '../../hooks/UseTypewriter';
import './Login.css';

export default function Login() {
    // ============================================
    // 상태 관리 (추후 useReducer로 변경하는게 좋을 듯)
    // ============================================

    //폼 입력값
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');

    // 비밀번호 표시 여부
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    // 로그인/회원가입 전환
    const [isSignUp, setIsSignUp] = useState(false);

    // 유효성 검사 에러
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [nameError, setNameError] = useState('');
    const [passwordConfirmError, setPasswordConfirmError] = useState('');

    // 로그인 상태 유지 여부
    const [isRemembered, setIsRemembered] = useState(false);

    // ============================================
    // 타이핑 애니메이션
    // ============================================

    // useTypewriter 훅으로 타이핑 효과 구현
    const fullTitle = 'Echo of Movement';
    const { text: displayText } = useTypewriter(fullTitle, 100);

    // ============================================
    // 이벤트 핸들러
    // ============================================

    // 로그인/회원가입 전환 및 폼 초기화
    const handleToggleForm = () => {
        setIsSignUp((prev) => !prev);
        // 모든 입력값 초기화
        setEmail('');
        setPassword('');
        setName('');
        setPasswordConfirm('');
        // 모든 에러 메시지 초기화
        setEmailError('');
        setPasswordError('');
        setNameError('');
        setPasswordConfirmError('');
    };

    //비밀번호 표시/숨기기
    const togglePasswordVisibility = () => {
        setIsPasswordVisible((prev) => !prev);
    };


    //폼 제출 (로그인/회원가입)
    const handleSubmit = (e) => {
        e.preventDefault();
        let valid = true;

        // 에러 상태 초기화
        setEmailError('');
        setPasswordError('');
        setNameError('');
        setPasswordConfirmError('');

        // 공통 유효성 검사: 이메일
        if (!email) {
            setEmailError('[translate:이메일을 입력하세요.]');
            valid = false;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            setEmailError('[translate:이메일 형식이 올바르지 않습니다.]');
            valid = false;
        }

        // 공통 유효성 검사: 비밀번호
        if (!password) {
            setPasswordError('[translate:비밀번호를 입력하세요.]');
            valid = false;
        } else if (password.length < 6) {
            setPasswordError('[translate:비밀번호는 최소 6자 이상이어야 합니다.]');
            valid = false;
        }

        // 회원가입 시에만 필요한 유효성 검사
        if (isSignUp) {
            if (!name) {
                setNameError('[translate:이름을 입력하세요.]');
                valid = false;
            }
            if (password !== passwordConfirm) {
                setPasswordConfirmError('[translate:비밀번호가 일치하지 않습니다.]');
                valid = false;
            } else if (!passwordConfirm) {
                setPasswordConfirmError('[translate:비밀번호 확인이 필요합니다.]');
                valid = false;
            }
        }

        // 유효성 검사 통과 시 제출
        if (valid) {
            if (isSignUp) {
                alert(`[회원가입 성공] 환영합니다, ${name}님!`);
            } else {
                alert(`[로그인 성공] 이메일: ${email}`);
            }
        }
    };

    // ============================================
    // UI 렌더링
    // ============================================

    return (
        <div className={`login-page ${isSignUp ? 'is-signup' : ''}`}>

            {/* 좌측 영역: 타이핑 애니메이션 + 배경 이미지 */}
            <div className="login-visual">
                <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.5 }}>
                    <Link to="/">{displayText}</Link>
                </motion.h1>
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 0.7 }} transition={{ duration: 1, delay: 1 }}>
                    We don't just move, we echo.
                </motion.p>
            </div>

            {/* 우측 영역: 로그인/회원가입 폼 */}
            <motion.div className="container">
                {/* 폼 제목 */}
                <div className="form-title">{isSignUp ? 'CREATE ACCOUNT' : 'LOGIN'}</div>
                <div className="subtitle">{isSignUp ? '새 계정을 만드세요' : '계정에 로그인하세요'}</div>

                <form onSubmit={handleSubmit}>

                    {/* 회원가입 시만 표시: 이름 입력 필드 */}
                    {isSignUp && (
                        <motion.div className="form-group"
                                    initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
                            <svg viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
                            <input
                                type="text"
                                id="name"
                                placeholder="이름"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            <div className="error">{nameError}</div>
                        </motion.div>
                    )}

                    {/* 이메일 입력 필드 */}
                    <div className="form-group">
                        <svg viewBox="0 0 24 24"><path d="M4 4h16v16H4z" fill="none" /><path d="M4 4l8 8 8-8" /></svg>
                        <input
                            type="email"
                            id="email"
                            placeholder="이메일 주소"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <div className="error">{emailError}</div>
                    </div>

                    {/* 비밀번호 입력 필드 + 표시/숨기기 토글 */}
                    <div className="form-group">
                        <svg viewBox="0 0 24 24"><path d="M12 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm6-7V8a6 6 0 0 0-12 0v2H4v11h16V10h-2zm-8 0V8a4 4 0 0 1 8 0v2H10z" /></svg>
                        <input
                            type={isPasswordVisible ? 'text' : 'password'}
                            id="password"
                            placeholder="비밀번호"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button
                            type="button"
                            className="toggle-password"
                            onClick={togglePasswordVisibility}
                        >
                            {isPasswordVisible ? '🐈' : '🐈‍⬛️'}
                        </button>
                        <div className="error">{passwordError}</div>
                    </div>

                    {/* 회원가입 시만 표시: 비밀번호 확인 필드 */}
                    {isSignUp && (
                        <motion.div className="form-group"
                                    initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.1 }}>
                            <svg viewBox="0 0 24 24"><path d="M12 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm6-7V8a6 6 0 0 0-12 0v2H4v11h16V10h-2zm-8 0V8a4 4 0 0 1 8 0v2H10z" /></svg>
                            <input
                                type={isPasswordVisible ? 'text' : 'password'}
                                id="passwordConfirm"
                                placeholder="비밀번호 확인"
                                value={passwordConfirm}
                                onChange={(e) => setPasswordConfirm(e.target.value)}
                            />
                            <button
                                type="button"
                                className="toggle-password"
                                onClick={togglePasswordVisibility}
                            >
                                {isPasswordVisible ? '🐈' : '🐈‍⬛️'}
                            </button>
                            <div className="error">{passwordConfirmError}</div>
                        </motion.div>
                    )}

                    {/* 로그인 옵션: 로그인 시에만 표시 */}
                    {!isSignUp && (
                        <div className="form-options">
                            <label>
                                <input
                                    type="checkbox"
                                    id="rememberMe"
                                    checked={isRemembered}
                                    onChange={(e) => setIsRemembered(e.target.checked)}
                                />
                                로그인 상태 유지
                            </label>
                            <Link to="#">비밀번호를 잊으셨나요?</Link>
                        </div>
                    )}

                    {/* 제출 버튼 */}
                    <button type="submit" className="submit-btn">
                        {isSignUp ? '회원가입' : '로그인'}
                    </button>

                    {/* 로그인/회원가입 전환 링크 */}
                    <div className="signup-link">
                        {isSignUp ? '이미 계정이 있으신가요?' : '계정이 없으신가요?'}
                        <span className="signup-toggle" onClick={handleToggleForm}>
                            {isSignUp ? '로그인' : '회원가입'}
                        </span>
                    </div>
                </form>
            </motion.div>
        </div>
    );
}
