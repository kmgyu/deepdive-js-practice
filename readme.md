# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


# structure
```
src/
├── assets/             # 이미지, 폰트, SVG 등 정적 자원
├── components/         # 공통 UI 컴포넌트 (Button, Modal 등)
├── features/           # 기능 단위 폴더 (UI + 로직 + API)
│   ├── auth/           # 로그인, 회원가입 등
│   ├── posts/          # 게시물 관련 기능
│   └── ...
├── hooks/              # 커스텀 훅
├── pages/              # 라우트 단위 페이지 컴포넌트
├── routes/             # 라우터 설정 파일
├── styles/             # 글로벌 스타일(CSS, tailwind 포함)
├── utils/              # 공통 유틸 함수
├── App.jsx             # 루트 컴포넌트
└── main.jsx            # 진입점
```

