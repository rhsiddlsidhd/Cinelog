# 코딩 컨벤션 — Cinelog

## 네이밍 규칙

| 대상 | 규칙 | 예시 |
| --- | --- | --- |
| 컴포넌트 | PascalCase | `MovieCard`, `SearchBar` |
| 함수 / 변수 | camelCase | `fetchMovies`, `isLoading` |
| 파일명 | kebab-case | `movie-card.tsx`, `use-movies.ts` |
| 상수 | UPPER_SNAKE_CASE | `API_BASE_URL`, `MAX_PAGE_SIZE` |

## 타입

**목적**: 런타임이 아닌 컴파일 단계에서 타입 오류를 조기에 발견한다.

**interface vs type**
- `interface` — 객체 형태: 도메인 모델, API 응답, Props
- `type` — 유니언, 리터럴, 유틸리티 타입 조합

**외부 데이터 처리**

외부 데이터(API 응답 등)의 실제 구조는 런타임 전까지 알 수 없다.
`unknown`으로 수신 후 zod로 검증해 타입을 좁힌다. 이 과정에서 `as` 단언이 필요 없어진다.

**`as` 타입 단언**

- `as const` 만 허용
- 그 외 `as` 직접 사용 금지 — 컴파일러를 우회해 런타임 버그를 숨김
- 서드파티 라이브러리 타입 불완전으로 불가피한 경우 주석으로 사유 명시 필수

**Object 키 / 엔트리 순회**

`Object.keys()` · `Object.entries()` 를 직접 사용하지 않는다.
반드시 `typedKeys` · `typedEntries` 유틸 함수를 사용한다.
`as` 타입 단언은 이 유틸 함수 내부에서만 허용한다.

`function typedKeys<T extends object>(obj: T): Array<keyof T>`
`function typedEntries<T extends object>(obj: T): Array<[keyof T, T[keyof T]]>`

## 함수 선언 방식

화살표 함수를 사용한다.

## enum

`enum`을 사용하지 않는다. union type으로 대체한다.

```typescript
// 금지
enum Status { Pending, Done }

// 사용
type Status = 'pending' | 'done'
```

## null vs undefined

빈 값은 `null`을 사용한다.

## 커스텀 훅

`use` prefix를 반드시 사용한다.

## 임포트 경로

절대 경로(`@/`)를 사용한다.

## 서버 / 클라이언트 컴포넌트

서버 컴포넌트를 기본으로 사용한다.
아래 경우에만 `"use client"`를 선언한다.

- 브라우저 API 사용 시 (`window`, `document` 등)
- 이벤트 핸들러 사용 시 (`onClick`, `onChange` 등)
- `useState` · `useEffect` 등 React 훅 사용 시

## export 방식

- Next.js 페이지 컴포넌트 — `default export` (Next.js 필수)
- 그 외 컴포넌트 / 함수 / 훅 — `named export`

## 포맷터 / 린터

ESLint + Prettier + prettier-plugin-tailwindcss (className 클래스 순서 자동 정렬)

