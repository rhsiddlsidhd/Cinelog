# 기술 스택 — Cinelog

## 언어

TypeScript

## 프레임워크

Next.js

## 주요 라이브러리

| 라이브러리            | 용도               |
| --------------------- | ------------------ |
| zustand               | 상태 관리          |
| tailwindcss           | 스타일링           |
| shadcn/ui             | UI 컴포넌트        |
| @tanstack/react-query | 데이터 페칭 / 캐싱 |
| zod                   | 런타임 타입 검증   |

## 선택 한/하지 않은 이유

### axios를 사용하지 않는 이유

<!--
- 서버 컴포넌트: Next.js 확장 fetch 사용 (캐싱 옵션 내장)
- 클라이언트 컴포넌트: React Query의 queryFn에 native fetch 사용
- TMDB API 키는 services/ 레이어에서 직접 헤더에 주입하므로 인터셉터 불필요
-->
