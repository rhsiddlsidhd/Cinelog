# 에러 처리 방식 — Cinelog

## 원칙

- 에러 메시지를 코드에 직접 작성하지 않는다 — `src/constants/error-message.ts`에서 중앙 관리한다
- `ApiError` 생성 시 반드시 `error-message.ts`에 정의된 메시지를 사용한다
- `services/` 레이어에서 발생하는 모든 에러(`fetch` 실패, `ZodError` 등)를 `ApiError`로 래핑해 던진다

## 레이어별 처리 방식

| 레이어 | 방식 |
| --- | --- |
| 서버 컴포넌트 | `error.tsx`로 에러 바운더리 처리 |
| 클라이언트 컴포넌트 | React Query `onError` 활용 |
| API 응답 | zod로 런타임 타입 검증 |

## 에러 타입 정의

`ApiError` — API 호출 실패 시 사용하는 커스텀 에러 클래스

| 필드 | 타입 | 설명 |
| --- | --- | --- |
| `status` | `number` | HTTP 상태코드 (404, 500 등) |
| `message` | `string` | 에러 메시지 (`Error` 클래스 상속) |

## 로깅

`console.error`를 사용한 콘솔 로깅
