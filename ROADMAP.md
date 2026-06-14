# 개발자 웹 이력서 프로젝트 ROADMAP

## 프로젝트 개요

반응형 개발자 웹 이력서를 HTML, CSS, JavaScript, TailwindCSS로 구현한다.

| 항목 | 내용 |
|------|------|
| 기술 스택 | HTML5, CSS3, Vanilla JavaScript, TailwindCSS (CDN) |
| 목표 | 모바일/데스크톱 반응형 이력서 페이지 |
| 배포 대상 | GitHub Pages / Netlify |

---

## 파일 구조

```
my-workspace/
├── index.html        # 메인 이력서 페이지
├── style.css         # 커스텀 스타일 (TailwindCSS 보완)
└── main.js           # 인터랙션 스크립트 (스크롤 애니메이션 등)
```

---

## 이력서 섹션 구성

| 섹션 | 내용 |
|------|------|
| Hero | 이름, 직함(Frontend Developer), 한 줄 소개, 연락처 링크 |
| About | 자기소개 요약 (3~4문장) |
| Skills | 기술 스택 카테고리별 배지 (Frontend / Backend / Tools) |
| Experience | 경력 타임라인 (회사명, 재직 기간, 담당 업무) |
| Projects | 주요 프로젝트 카드 (설명, 사용 기술, GitHub/Demo 링크) |
| Education | 학력 사항 (대학교, 전공, 졸업 연도) |
| Contact | 이메일, GitHub, LinkedIn 링크 |

---

## 개발 단계

### Phase 1 — 기본 구조 설정
- [ ] `index.html` 뼈대 작성
- [ ] TailwindCSS CDN 연결
- [ ] 상단 고정 네비게이션 바 구현 (섹션 앵커 링크 포함)

**완료 기준:** 브라우저에서 기본 레이아웃 확인 가능

---

### Phase 2 — 이력서 섹션 구현
- [ ] Hero 섹션: 이름, 직함, 소개 문구, GitHub/이메일 버튼
- [ ] About 섹션: 프로필 사진 placeholder + 자기소개 텍스트
- [ ] Skills 섹션: 배지 형태로 기술 스택 나열
- [ ] Experience 섹션: 타임라인 형태 경력 목록
- [ ] Projects 섹션: 카드 그리드 레이아웃
- [ ] Education 섹션: 학력 리스트
- [ ] Contact 섹션: SNS 아이콘 + 링크

**완료 기준:** 모든 섹션 콘텐츠가 화면에 표시됨

---

### Phase 3 — 스타일링 및 반응형
- [ ] TailwindCSS 유틸리티 클래스로 전체 레이아웃 정리
- [ ] 반응형 브레이크포인트 적용 (sm / md / lg)
- [ ] 색상 팔레트 정의 (primary: indigo, neutral: gray 계열)
- [ ] `style.css`에 TailwindCSS로 표현 어려운 커스텀 스타일 추가

**완료 기준:** 모바일(375px) 화면에서 레이아웃 깨짐 없음

---

### Phase 4 — 인터랙션 추가
- [ ] 스크롤 시 섹션 페이드인 애니메이션 (IntersectionObserver 활용)
- [ ] 스크롤 위치에 따라 네비게이션 활성 항목 하이라이트
- [ ] 화면 하단에 "상단으로 이동" 버튼 표시/숨김

**완료 기준:** 스크롤 애니메이션 및 네비게이션 인터랙션 동작 확인

---

### Phase 5 — 마무리 및 배포
- [ ] Chrome / Firefox / Safari 크로스 브라우저 테스트
- [ ] 이미지 최적화 및 불필요한 코드 제거
- [ ] `<meta>` 태그 SEO 기본 설정 (title, description, og 태그)
- [ ] GitHub Pages 또는 Netlify 배포

**완료 기준:** 퍼블릭 URL로 정상 접근 가능

---

## 마일스톤 요약

| 단계 | 주요 산출물 | 완료 기준 |
|------|------------|----------|
| Phase 1 | `index.html` 기본 구조 | 네비게이션 렌더링 확인 |
| Phase 2 | 전체 섹션 콘텐츠 | 7개 섹션 모두 표시 |
| Phase 3 | 반응형 스타일 | 모바일 레이아웃 정상 |
| Phase 4 | JS 인터랙션 | 애니메이션 동작 |
| Phase 5 | 배포 완료 | 퍼블릭 URL 접근 가능 |
