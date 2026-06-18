@AGENTS.md

# CLAUDE.md (프로젝트)

> 이 프로젝트에 한정하여 적용되는 규칙.
> 공통 규칙은 전역 CLAUDE.md를 따른다.

---

## Git

- 브랜치 흐름: `<prefix>/*` → `dev` → `main`
- 모든 작업은 `<prefix>/*` 브랜치에서 시작한다
- `dev` 브랜치에 직접 커밋하지 않는다
- `feat/*` 브랜치를 `main`에 직접 병합하지 않는다
- `dev` 검증 없이 `main`에 병합하지 않는다
- 충돌 해결은 `feat/*` → `dev` 단계에서 한다 (`main`에서 하지 않는다)
- 머지 완료된 로컬 브랜치는 즉시 삭제한다 (`git branch -d`)

---

## Context

@docs/coding-convention.md
@docs/error-handling.md

---

## Reference

해당 문서를 읽지 않고 아래 작업을 시작하지 않는다.

| 상황                           | 문서                       |
| ------------------------------ | -------------------------- |
| git 작업                       | @docs/branch-strategy.md   |
| 새 기능 추가 / 모듈 구조 변경  | @docs/architecture.md      |
| 파일 / 폴더 생성               | @docs/project-structure.md |
| 라이브러리 / 의존성 추가       | @docs/tech-stack.md        |
| 환경 변수 / 실행 스크립트 변경 | @docs/dev-environment.md   |
| 컴포넌트 작성                  | @docs/component-guide.md   |
| 서비스 목적 / 기능 범위 파악   | @docs/product-overview.md  |
| 화면 구성 / UI 요소 확인       | @docs/screen-specs.md      |

### TMDB API 명세서

| 상황                       | 문서                  |
| -------------------------- | --------------------- |
| 검색 API 엔드포인트 확인   | @docs/api/search.md   |
| 트렌딩 API 엔드포인트 확인 | @docs/api/trending.md |
| 영화 API 엔드포인트 확인   | @docs/api/movie.md    |
| TV API 엔드포인트 확인     | @docs/api/tv.md       |
| 인물 API 엔드포인트 확인   | @docs/api/person.md   |

