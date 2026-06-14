# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 언어 및 커뮤니케이션 규칙

- **기본 응답 언어**: 한국어
- **코드 주석**: 한국어로 작성
- **커밋 메시지**: 한국어로 작성
- **문서화**: 한국어로 작성
- **변수명/함수명**: 영어 (코드 표준 준수)

## 프로젝트 개요

양태성(AI 서비스 기획자 & 데이터 분석가)의 개인 포트폴리오 사이트.  
`index.html` 단일 파일로 구성된 정적 웹사이트이며 별도의 빌드 과정이 없다.

## 실행 방법

빌드 도구나 패키지 매니저가 없다. 브라우저에서 `index.html`을 직접 열거나 간단한 로컬 서버를 사용한다.

```powershell
# Python이 설치된 경우
python -m http.server 8000
# 브라우저에서 http://localhost:8000 접속
```

## 아키텍처

`index.html` 하나에 HTML · CSS · JavaScript가 모두 포함된 단일 파일 구조다.

**외부 CDN 의존성 (인터넷 연결 필요)**
- Tailwind CSS (CDN) — 유틸리티 클래스 기반 스타일링, `tailwind.config`로 커스텀 색상(`brand`) 및 애니메이션 정의
- Google Fonts — Inter 폰트
- Font Awesome 6 — 아이콘

**CSS 커스텀 클래스** (`<style>` 블록)
- `.reveal` / `.reveal.visible` — IntersectionObserver로 제어하는 스크롤 진입 애니메이션
- `.nav-link` / `.nav-link.active` — 활성 섹션 하이라이트 및 언더라인 효과
- `.skill-card`, `.project-card` — 호버 시 부유 효과

**JavaScript** (인라인, `<script>` 블록)
- 모바일 햄버거 메뉴 토글
- 스크롤 시 네비게이션 그림자 처리
- `IntersectionObserver` 두 개: 활성 섹션 네비 하이라이트 / `.reveal` 스크롤 애니메이션

**페이지 섹션 순서**: `#hero` → `#about` → `#skills` → `#projects` → `#contact` → footer

## 콘텐츠 수정 시 주의사항

- 이메일 주소(`bigcastle121@kyonggi.ac.kr`)는 `mailto:` 링크 3곳과 텍스트 1곳에 중복 사용됨 — 변경 시 전체 검색 후 일괄 교체
- GitHub · LinkedIn URL은 현재 플레이스홀더(`https://github.com/`, `https://linkedin.com/`)로 되어 있어 실제 프로필 URL로 교체 필요
- 브랜드 색상은 `tailwind.config`의 `brand` 팔레트에서 일괄 관리 (`#6366f1` 계열 인디고)
