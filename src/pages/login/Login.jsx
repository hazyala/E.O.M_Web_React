import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Login.css';

export default function Login() {
    // 1. 상태 관리 및 토글 로직
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');

    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [isSignUp, setIsSignUp] = useState(false);

    // 에러 상태
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [nameError, setNameError] = useState('');
    const [passwordConfirmError, setPasswordConfirmError] = useState('');

    const [isRemembered, setIsRemembered] = useState(false);

    // 폼 전환 함수: 상태를 토글하고 에러/인풋을 초기화합니다.
    const handleToggleForm = () => {
        setIsSignUp((prev) => !prev);
        setEmail('');
        setPassword('');
        setName('');
        setPasswordConfirm('');
        setEmailError('');
        setPasswordError('');
        setNameError('');
        setPasswordConfirmError('');
    };

    // 타자기 효과 로직
    const [displayText, setDisplayText] = useState('');
    const fullTitle = 'Echo of Movement';
    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            if (index <= fullTitle.length) {
                setDisplayText(fullTitle.slice(0, index));
                index++;
            } else {
                clearInterval(interval);
            }
        }, 100);
        return () => clearInterval(interval);
    }, [fullTitle]);

    // 2. 비밀번호 보이기/숨기기 기능
    const togglePasswordVisibility = () => {
        setIsPasswordVisible((prev) => !prev);
    };

    // 3. 폼 유효성 검사 및 제출 (로그인/회원가입 분기)
    const handleSubmit = (e) => {
        e.preventDefault();
        let valid = true;

        // 에러 상태 초기화
        setEmailError('');
        setPasswordError('');
        setNameError('');
        setPasswordConfirmError('');

        // 공통 유효성 검사
        if (!email) { setEmailError('이메일을 입력하세요.'); valid = false; }
        else if (!/\S+@\S+\.\S+/.test(email)) { setEmailError('이메일 형식이 올바르지 않습니다.'); valid = false; }
        if (!password) { setPasswordError('비밀번호를 입력하세요.'); valid = false; }
        else if (password.length < 6) { setPasswordError('비밀번호는 최소 6자 이상이어야 합니다.'); valid = false; }

        if (isSignUp) {
            if (!name) { setNameError('이름을 입력하세요.'); valid = false; }
            if (password !== passwordConfirm) {
                setPasswordConfirmError('비밀번호가 일치하지 않습니다.');
                valid = false;
            } else if (!passwordConfirm) {
                setPasswordConfirmError('비밀번호 확인이 필요합니다.');
                valid = false;
            }
        }

        // 최종 제출
        if (valid) {
            if (isSignUp) {
                alert(`[회원가입 성공] 환영합니다, ${name}님!`);
            } else {
                alert(`[로그인 성공] 이메일: ${email}`);
            }
        }
    };

    return (
        <div className={`login-page ${isSignUp ? 'is-signup' : ''}`}>

            {/* 1. 좌측 영역  */}
            <div className="login-visual">
                <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.5 }}>
                    <Link to="/" >{displayText}</Link>
                </motion.h1>
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 0.7 }} transition={{ duration: 1, delay: 1 }}>
                    We don't just move, we echo.
                </motion.p>
            </div>

            {/* 2. 우측 폼 영역  */}
            <motion.div className="container">
                {/* 타이틀: 상태에 따라 변경 */}
                <div className="form-title">{isSignUp ? 'CREATE ACCOUNT' : 'LOGIN'}</div>
                <div className="subtitle">{isSignUp ? '새 계정을 만드세요' : '계정에 로그인하세요'}</div>

                <form onSubmit={handleSubmit}>

                    {/* 회원가입 시 이름 표시 */}
                    {isSignUp && (
                        <motion.div className="form-group"
                                    initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}
                        >
                            <svg viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
                            <input type="text" id="name" placeholder="이름" value={name} onChange={(e) => setName(e.target.value)} />
                            <div className="error">{nameError}</div>
                        </motion.div>
                    )}

                    {/* 이메일 */}
                    <div className="form-group">
                        <svg viewBox="0 0 24 24"><path d="M4 4h16v16H4z" fill="none" /><path d="M4 4l8 8 8-8" /></svg>
                        <input type="email" id="email" placeholder="이메일 주소" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <div className="error">{emailError}</div>
                    </div>

                    {/* 비밀번호 */}
                    <div className="form-group">
                        <svg viewBox="0 0 24 24"><path d="M12 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm6-7V8a6 6 0 0 0-12 0v2H4v11h16V10h-2zm-8 0V8a4 4 0 0 1 8 0v2H10z" /></svg>
                        <input type={isPasswordVisible ? 'text' : 'password'} id="password" placeholder="비밀번호" value={password} onChange={(e) => setPassword(e.target.value)} />
                        <button type="button" className="toggle-password" onClick={togglePasswordVisibility}>{isPasswordVisible ? '🐈' : '🐈‍⬛️'}</button>
                        <div className="error">{passwordError}</div>
                    </div>

                    {/*회원가입 시 비밀번호 확인*/}
                    {isSignUp && (
                        <motion.div className="form-group"
                                    initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.1 }}
                        >
                            <svg viewBox="0 0 24 24"><path d="M12 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm6-7V8a6 6 0 0 0-12 0v2H4v11h16V10h-2zm-8 0V8a4 4 0 0 1 8 0v2H10z" /></svg>
                            <input type={isPasswordVisible ? 'text' : 'password'} id="passwordConfirm" placeholder="비밀번호 확인" value={passwordConfirm} onChange={(e) => setPasswordConfirm(e.target.value)} />
                            <button type="button" className="toggle-password" onClick={togglePasswordVisibility}>{isPasswordVisible ? '🐈' : '🐈‍⬛️' }</button>
                            <div className="error">{passwordConfirmError}</div>
                        </motion.div>
                    )}

                    {/* 옵션 - 로그인 시에만 표시 */}
                    {!isSignUp && (
                        <div className="form-options">
                            <label><input type="checkbox" id="rememberMe" checked={isRemembered} onChange={(e) => setIsRemembered(e.target.checked)} /> 로그인 상태 유지</label>
                            <Link to="#">비밀번호를 잊으셨나요?</Link>
                        </div>
                    )}

                    {/* 로그인/회원가입 버튼 */}
                    <button type="submit" className="submit-btn">{isSignUp ? '회원가입' : '로그인'}</button>

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