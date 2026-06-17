# CLAUDE.md

이 파일은 Claude Code가 이 저장소에서 코드를 작업할 때 참고하기 위한 지침을 제공합니다.

---

## 프로젝트 개요

Next.js v15 기반의 현대적인 웹 애플리케이션 스타터킷입니다. TypeScript, TailwindCSS v4, shadcn/ui를 활용한 타입 안전하고 스타일링이 우수한 UI 컴포넌트 라이브러리를 제공합니다.

**핵심 기술 스택:**
- **Next.js 16.2.9** (App Router, 서버 컴포넌트 기본)
- **React 19.2.4**
- **TypeScript 5** (strict mode)
- **TailwindCSS 4** (@import "tailwindcss" 문법, tailwind.config.js 없음)
- **shadcn/ui 기반 컴포넌트** (Radix UI 프리미티브)
- **next-themes** (다크/라이트/시스템 모드 자동 전환)
- **lucide-react** (아이콘 라이브러리)

---

## 개발 환경 설정

### 필수 명령어

```bash
# 개발 서버 실행 (localhost:3000)
npm run dev

# 프로덕션 빌드
npm run build

# 프로덕션 서버 시작
npm start

# 린트 검사
npm run lint
```

### 빠른 시작

```bash
npm install
npm run dev
```

---

## 프로젝트 구조

```
src/
├── app/                    # Next.js App Router 페이지 & 레이아웃
│   ├── layout.tsx         # 루트 레이아웃 (ThemeProvider 설정)
│   ├── globals.css        # 전역 스타일 & CSS 변수 정의
│   ├── page.tsx           # 홈 페이지
│   ├── login/page.tsx     # 로그인 페이지
│   ├── dashboard/page.tsx # 대시보드 페이지
│   └── settings/page.tsx  # 설정 페이지
│
├── components/
│   ├── ui/                # shadcn/ui 컴포넌트 (Radix 프리미티브 래퍼)
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   ├── badge.tsx
│   │   ├── separator.tsx
│   │   ├── dialog.tsx
│   │   ├── dropdown-menu.tsx
│   │   └── avatar.tsx
│   ├── common/            # 재사용 가능한 공통 컴포넌트
│   │   ├── Logo.tsx       # 로고 & 홈 링크
│   │   ├── ThemeToggle.tsx # 테마 전환 버튼 (next-themes)
│   │   └── PageHeader.tsx
│   └── layout/            # 레이아웃 컴포넌트
│       ├── Header.tsx     # 상단 네비게이션 헤더 (모든 페이지에서 공통)
│       ├── Footer.tsx     # 푸터
│       ├── Sidebar.tsx    # 사이드바
│       └── DashboardLayout.tsx # 대시보드 전용 레이아웃
│
└── lib/
    └── utils.ts           # cn() 유틸 (clsx + tailwind-merge)
```

---

## 핵심 아키텍처

### 1. 테마 시스템 (Dark Mode)

**파일:** `src/app/globals.css` + `src/app/layout.tsx`

- **next-themes** 라이브러리로 라이트/다크/시스템 모드 관리
- 클래스 기반: HTML 요소에 `dark` 클래스가 붙었을 때 다크 모드 CSS 변수 적용
- **CSS 변수:** 라이트(`:root`)와 다크(`.dark`) 모드별로 컬러 팔레트 정의
  - `--background`, `--foreground`, `--primary`, `--muted` 등
- **TailwindCSS v4:** `@custom-variant dark` 문법으로 다크 모드 대응
- **구현 예:**
  ```tsx
  // 자동으로 다크 모드 대응
  <div className="bg-background text-foreground">콘텐츠</div>
  ```

### 2. 컴포넌트 시스템

**shadcn/ui 기반 (Radix UI 프리미티브 + CVA)**

- 모든 UI 컴포넌트는 `src/components/ui/`에 위치
- Radix UI의 unstyled 프리미티브를 감싸서 제공
- `cn()` 유틸로 조건부 클래스 병합
- **예시:**
  ```tsx
  // Radix Dialog 프리미티브를 shadcn/ui 컴포넌트로 감싸기
  import * as DialogPrimitive from "@radix-ui/react-dialog"
  
  const DialogContent = React.forwardRef<...>((props, ref) => (
    <DialogPrimitive.Content
      className={cn("...styles...", className)}
      {...props}
    />
  ))
  ```

### 3. 공통 레이아웃 패턴

**Header 컴포넌트 (`src/components/layout/Header.tsx`)**

- 모든 페이지(홈, 로그인, 대시보드 등)에서 공통으로 사용
- 로고 + 네비게이션 링크 + 테마 토글 포함
- 고정(`sticky`) 위치, 반응형 메뉴 버튼 지원
- Props: `onMenuClick`, `showMenuButton` (선택)

**사용 예:**
```tsx
export default function SomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex flex-1 items-center justify-center">
        {/* 페이지 콘텐츠 */}
      </main>
    </div>
  )
}
```

### 4. 타입 안정성

- **TypeScript strict mode:** 모든 타입 명시 필수
- **any 타입 금지:** 대신 `unknown` 또는 제네릭 사용
- **공개 API는 JSDoc 주석:** 함수/컴포넌트의 의도를 명확히
- **타입 정의:** 인터페이스나 타입 별칭로 props 명시

```tsx
interface HeaderProps {
  onMenuClick?: () => void
  showMenuButton?: boolean
}

export function Header({ onMenuClick, showMenuButton = false }: HeaderProps) {
  // ...
}
```

---

## 코딩 규칙

### 파일명 및 네이밍

- **컴포넌트:** PascalCase (예: `Header.tsx`, `ThemeToggle.tsx`)
- **유틸리티 함수:** camelCase (예: `utils.ts`)
- **페이지 라우트:** 폴더명이 URL (예: `app/login/page.tsx` → `/login`)

### 컴포넌트 작성

- **기본값:** 모든 컴포넌트는 서버 컴포넌트 (특별히 필요하면 `'use client'` 추가)
- **Props 타입:** 인터페이스로 명시 (타입 별칭 가능하지만 인터페이스 권장)
- **스타일:** TailwindCSS 클래스만 사용 (인라인 스타일 금지)
- **주석:** JSDoc 또는 한 줄 주석 (다중행 주석 최소화)

### CSS/TailwindCSS v4

- **임포트 방식:** `@import "tailwindcss";` (globals.css 최상단)
- **tailwind.config.js 없음:** CSS 변수와 `@theme` 블록으로 테마 관리
- **클래스 명명:** Tailwind 표준 (예: `flex`, `gap-4`, `bg-background`)
- **다크 모드:** `dark:` prefix 사용 (자동으로 `.dark` 클래스 감지)
  ```tsx
  <div className="bg-white dark:bg-slate-950">...</div>
  ```

### 커밋 메시지

- **한글 작성**: "feat:", "fix:", "refactor:" 등 컨벤셔널 프리픽스 사용
- **예시:**
  - `feat: 로그인 페이지 추가`
  - `fix: Header 다크모드 색상 수정`
  - `refactor: 공통 컴포넌트로 추출`

---

## 자주 마주치는 패턴

### 조건부 클래스 적용

```tsx
import { cn } from "@/lib/utils"

export function MyComponent({ isActive }: { isActive: boolean }) {
  return (
    <div className={cn(
      "base-classes",
      isActive && "active-classes"
    )}>
      콘텐츠
    </div>
  )
}
```

### 페이지 메타데이터

```tsx
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "페이지 제목"
}

export default function Page() {
  return <div>콘텐츠</div>
}
```

### 링크와 라우팅

```tsx
import Link from "next/link"

export function Navigation() {
  return (
    <nav>
      <Link href="/">홈</Link>
      <Link href="/dashboard">대시보드</Link>
    </nav>
  )
}
```

---

## 주의사항

### TailwindCSS v4 특수성

- **tailwind.config.js 없음:** 설정은 globals.css의 `@theme` 블록에서 처리
- **색상:** CSS 변수(HSL) 기반 (`hsl(var(--background))`)
- **플러그인:** PostCSS 플러그인이 필요하면 `@tailwindcss/postcss` 참고

### Next.js v16 특수성

- **App Router:** 페이지는 항상 `app/[경로]/page.tsx`
- **동적 라우팅:** `app/[id]/page.tsx` 형식 (라우트 세그먼트)
- **API Routes:** `app/api/[경로]/route.ts` (페이지가 아닌 API 핸들러)
- **`suppressHydrationWarning`:** 루트 레이아웃에 있음 (테마 시스템 때문)

### 반응형 디자인

- **모바일 우선:** Tailwind 기본값은 모바일, `md:`, `lg:` 등으로 확대
- **Header 메뉴:** `md:hidden` 클래스로 모바일 전용 메뉴 버튼 처리

---

## 배포

- **Vercel:** Next.js 공식 배포 플랫폼 (최고 성능)
- **다른 호스팅:** `npm run build` 후 `.next` 폴더 배포
- **환경 변수:** `.env.local` 파일에 로컬 시크릿 저장 (`.gitignore`에 등재)

---

## 참고 자료

- [Next.js 공식 문서](https://nextjs.org/docs)
- [TailwindCSS v4 가이드](https://tailwindcss.com/docs)
- [shadcn/ui 컴포넌트](https://ui.shadcn.com/)
- [Radix UI 프리미티브](https://www.radix-ui.com/)
- [next-themes 문서](https://github.com/pacocur/next-themes)
