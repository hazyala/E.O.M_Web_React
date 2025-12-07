# 🎧 Echo of Movement (E.O.M) - React Edition

> **E.O.M (Echo of Movement)**는 움직임이 곧 브랜드가 되는 시대를 위한 스트릿 댄서들을 위한 시크하고 다이나믹한 플랫폼형 홈페이지입니다.  
> 공연, 배틀, 포트폴리오, 캐스팅 등 댄서들의 연결을 위한 새로운 시작을 염원하며 기획된 프로젝트입니다.

기존 **HTML5 + CSS + JavaScript 기반 웹사이트(E.O.M_WEB)**를  
**React**로 재구성하여 성능, 유지보수성, 확장성을 높인 버전입니다.

---

## ✨ Live Site

- **React Edition:** https://hazyala.github.io/E.O.M_Web_React
- **Original Edition:** https://hazyala.github.io/E.O.M_WEB/

---

## 📸 프로젝트 미리보기

> 주요 섹션별 UI와 분위기를 보여주는 스크린샷입니다.

<p align="center">
  <img src="./README/1.jpg" width="800" />
</p>

<p align="center">
  <img src="./README/2.jpg" width="800" />
</p>

<p align="center">
  <img src="./README/3.jpg" width="800" />
</p>

<p align="center">
  <img src="./README/4.jpg" width="800" />
</p>

---

## 💡 주요 변화 및 특징

기존 디자인과 컨셉을 유지하면서 React로 다음과 같은 개선을 적용했습니다.

| 변화 / 개선 사항 | 상세 내용 | 관련 기술 |
|------------------|-----------|-----------|
| 다크/라이트 모드 지원 | Context API와 localStorage를 활용한 전역 테마 상태 관리 | React Context API, custom `useTheme` hook |
| 동적 애니메이션 도입 | 스크롤 시 섹션 요소 등장 인터랙션 구현 | framer-motion |
| 타이핑 효과 훅 | Hero 슬로건에 적용 가능한 타이핑 애니메이션 | custom `useTypewriter` hook |
| SPA 라우팅 | URL 기반 페이지 전환 구조로 재구성 | react-router-dom |
| 로그인 UI 개선 | 로그인/회원가입 폼을 슬라이드 전환 방식 구성 | framer-motion |

---

## 🏛️ 아키텍처 및 폴더 구조

컴포넌트 기반 설계로 레이아웃·공통 컴포넌트·페이지를 명확히 분리했습니다.

```
src/
├── App.jsx                  # 루트 컴포넌트, ThemeProvider + 라우팅
├── context/
│   └── ThemeContext.jsx     # 전역 다크/라이트 모드 관리
├── hooks/
│   ├── UseTheme.js          # 테마 커스텀 훅
│   └── UseTypewriter.js     # 타이핑 애니메이션 훅
├── components/
│   ├── common/
│   │   ├── Button.jsx
│   │   └── Button.css
│   └── layout/
│       ├── Header.jsx
│       ├── Header.css
│       ├── Footer.jsx
│       └── Footer.css
├── pages/
│   ├── home/
│   │   ├── Home.jsx
│   │   ├── HeroSection.jsx
│   │   ├── ShowSection.jsx
│   │   ├── CastSection.jsx
│   │   ├── HypeSection.jsx
│   │   ├── LinkSection.jsx
│   │   └── ...각 섹션 CSS 파일
│   └── login/
│       ├── Login.jsx
│       └── Login.css
└── styles/
    ├── Animation.js
    ├── Index.css
    └── Reset.css
```

---

## 🔧 기술 스택

| 구분 | 기술 | 사용 목적 |
|------|-------|------------|
| **Framework** | React | 컴포넌트 기반 UI 개발 |
| **Routing** | react-router-dom | SPA 라우팅 |
| **Animation** | framer-motion | 등장·전환 애니메이션 |
| **Styling** | CSS, CSS 변수 | 테마 및 섹션 스타일링 |
| **Deployment** | GitHub Pages | 정적 배포 |

---

## 🚀 프로젝트 실행 방법

1. **의존성 설치**

```
npm install
```

2. **로컬 개발 서버 실행**

```
npm start
```

3. 브라우저에서 접속  
   http://localhost:3000

---

## 🩶 프로젝트 의의

**Echo of Movement**는 “움직임이 곧 브랜드가 되는 순간”을 웹으로 옮기는 것을 목표로 합니다.  
React 기반으로 구조·애니메이션·테마를 현대화하여 스트릿 댄서 커뮤니티를 위한 디지털 무대를 확장하는 데 초점을 두었습니다.
본 프로젝트는 디자인 보다 리액트의 장점을 극대화하는것에 초점을 두었습니다.
컴포넌트 기반 설계를 중심으로 UI를 기능 단위로 명확히 분리하고, 반복되는 로직은 커스텀 훅으로, 전역 상태 관리와 애니메이션 레이어도 React 방식에 맞게 재구성했습니다. 
이를 통해 React의 기능을 최대한 활용하면서도, 유지보수성과 확장성이 뛰어난 유연한 코드를 제작하는 것을 목표로 했습니다.
