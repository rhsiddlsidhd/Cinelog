# 프로젝트 구조 — Cinelog

## 폴더 구조

```
src/
├── app/
│   ├── [page]/
│   │   ├── _components/  # 페이지별 컴포넌트
│   │   ├── _hooks/       # 페이지별 커스텀 훅
│   │   └── _services/    # 페이지별 TMDB API 호출
│   └── layout.tsx
├── components/
│   ├── ui/               # 전역 공통 UI 컴포넌트
│   └── layout/           # 전역 레이아웃 컴포넌트
├── hooks/                # 전역 공통 커스텀 훅
├── store/                # 역할별 zustand 스토어
│   ├── filter.store.ts
│   └── ui.store.ts
└── constants/            # 전역 상수
    └── error-message.ts  # 에러 메시지 중앙 관리
```

## 주요 파일 설명

<!-- 파일명 | 역할 형식으로 작성 -->
