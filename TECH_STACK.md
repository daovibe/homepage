# 🛠️ 다바코단 홈페이지 기술 스택

## 📋 Overview

다바코단 홈페이지는 모던한 웹 기술 스택을 활용하여 구축된 SPA(Single Page Application)입니다.

## 🚀 Core Technologies

### Frontend Framework
| 기술 | 버전 | 설명 |
|------|------|------|
| **React** | 18.3.1 | UI 라이브러리 |
| **TypeScript** | 5.5.3 | 정적 타입 시스템 |
| **Vite** | 5.4.1 | 차세대 프론트엔드 빌드 도구 |
| **React Router DOM** | 6.26.2 | 클라이언트 사이드 라우팅 |

### Styling
| 기술 | 버전 | 설명 |
|------|------|------|
| **Tailwind CSS** | 3.4.11 | 유틸리티 기반 CSS 프레임워크 |
| **PostCSS** | 8.4.47 | CSS 전처리기 |
| **Autoprefixer** | 10.4.20 | CSS 벤더 프리픽스 자동 추가 |
| **clsx** | 2.1.1 | 조건부 클래스명 유틸리티 |
| **tailwind-merge** | 2.5.2 | Tailwind 클래스 충돌 해결 |

## 🎨 UI & Design System

### Component Library
- **Shadcn/UI** - 재사용 가능한 컴포넌트 라이브러리
- **Radix UI** - 접근성이 뛰어난 헤드리스 UI 컴포넌트
  - Accordion, Alert Dialog, Avatar, Badge, Button, Calendar
  - Card, Carousel, Chart, Checkbox, Collapsible, Command
  - Context Menu, Dialog, Drawer, Dropdown Menu, Form
  - Hover Card, Input, Label, Menubar, Navigation Menu
  - Pagination, Popover, Progress, Radio Group, Resizable
  - Scroll Area, Select, Separator, Sheet, Sidebar, Skeleton
  - Slider, Switch, Table, Tabs, Textarea, Toast, Toggle, Tooltip

### Icons & Typography
- **Lucide React** (v0.462.0) - 아이콘 라이브러리
- **@tailwindcss/typography** (v0.5.15) - 타이포그래피 플러그인

## 🎭 Animation & 3D Graphics

| 기술 | 버전 | 설명 |
|------|------|------|
| **Framer Motion** | 12.23.12 | React 애니메이션 라이브러리 |
| **Three.js** | 0.179.1 | 3D 그래픽스 라이브러리 |
| **@react-three/fiber** | 8.18.0 | React용 Three.js 렌더러 |
| **@react-three/drei** | 9.122.0 | R3F 헬퍼 컴포넌트 |
| **tailwindcss-animate** | 1.0.7 | Tailwind 애니메이션 플러그인 |

## 📊 State Management & Data Fetching

| 기술 | 버전 | 설명 |
|------|------|------|
| **@tanstack/react-query** | 5.56.2 | 서버 상태 관리 |
| **React Hook Form** | 7.53.0 | 폼 상태 관리 |
| **Zod** | 3.23.8 | TypeScript 우선 스키마 검증 |

## 🧩 Additional Libraries

### Utilities
- **date-fns** (3.6.0) - 날짜 유틸리티 라이브러리
- **class-variance-authority** (0.7.1) - 컴포넌트 variant 관리
- **simplex-noise** (4.0.3) - 노이즈 생성 라이브러리

### UI Components
- **Sonner** (1.5.0) - 토스트 알림
- **React Day Picker** (8.10.1) - 날짜 선택기
- **Recharts** (2.12.7) - 차트 라이브러리
- **Embla Carousel React** (8.3.0) - 캐러셀 컴포넌트
- **React Resizable Panels** (2.1.3) - 리사이즈 가능한 패널
- **CMDK** (1.0.0) - 커맨드 메뉴
- **Vaul** (0.9.3) - Drawer 컴포넌트
- **Input OTP** (1.2.4) - OTP 입력 컴포넌트
- **next-themes** (0.3.0) - 테마 관리 시스템

## 🛠️ Development Tools

### Build & Development
- **@vitejs/plugin-react-swc** (3.5.0) - Vite React 플러그인 (SWC 컴파일러)
- **ESLint** (9.9.0) - 코드 린터
- **typescript-eslint** (8.0.1) - TypeScript ESLint 지원

### ESLint Plugins
- **eslint-plugin-react-hooks** (5.1.0-rc.0) - React Hooks 린트 규칙
- **eslint-plugin-react-refresh** (0.4.9) - React Fast Refresh 지원

## 📦 Project Configuration

### TypeScript Configuration
```json
{
  "target": "ES2020",
  "module": "ESNext",
  "jsx": "react-jsx",
  "paths": {
    "@/*": ["./src/*"]
  },
  "noImplicitAny": false,
  "strictNullChecks": false
}
```

### Vite Configuration
- **Development Server Port**: 8080
- **Host**: `::`
- **Path Aliases**: `@` → `./src`

## 🌐 Deployment

- **Platform**: Vercel
- **Source Control**: GitHub
- **Build Command**: `npm run build`
- **Output Directory**: `dist`

## 📝 Scripts

```json
{
  "dev": "vite",
  "build": "vite build",
  "build:dev": "vite build --mode development",
  "lint": "eslint .",
  "preview": "vite preview"
}
```

## 🔧 Browser Support

- Modern browsers with ES2020 support
- Chrome, Firefox, Safari, Edge (latest versions)

## 📄 License

Copyright © 2025 다바코단. All rights reserved.