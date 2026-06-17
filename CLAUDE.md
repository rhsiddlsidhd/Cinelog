@AGENTS.md

# CLAUDE.md (프로젝트)

> 이 프로젝트에 한정하여 적용되는 규칙.
> 공통 규칙은 전역 CLAUDE.md를 따른다.

---

## Git

- 브랜치 흐름: `<prefix>/*` → `dev` → `main`
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

---

## 하네스: Cinelog 초기 셋업

**목표:** docs/ 문서를 분석해 초기 개발 환경을 구성한다.

**트리거:** '초기 설정', 'initial setup', '개발 환경 구성', '프로젝트 셋업', 'create-next-app', '환경 세팅' 등의 요청 시 `cinelog-initial-setup` 스킬을 사용하라.

---

## 하네스: Cinelog 기능 개발

**목표:** 새 기능 추가 시 계획→구현→리뷰 파이프라인으로 컨벤션 일관성을 유지한다.

**트리거:** 기능 추가, 페이지 구현, 컴포넌트/서비스/훅 작성 요청 시 `cinelog-feature` 스킬을 사용하라. 단순 질문은 직접 응답 가능.

**변경 이력:**
| 날짜 | 변경 내용 | 대상 | 사유 |
|------|----------|------|------|
| 2026-06-17 | 초기 구성 | 전체 | - |
| 2026-06-17 | docs/ → docs/dev/ 이동, docs/product/ 신설 | CLAUDE.md, docs/ | 개발자/기획 문서 경로 분리 |
| 2026-06-17 | flat 구조로 복원, api-specs.md 추가 | CLAUDE.md, docs/ | 단일 docs/ 통합 관리 + Notion API 명세 추가 |
| 2026-06-17 | api-specs.md → docs/api/\*.md 분리 | CLAUDE.md, docs/api/ | 도메인별 독립 로딩으로 컨텍스트 효율화 |
| 2026-06-17 | 하네스 파일 생성 (agents 3개 + skill 1개) | .claude/agents/, .claude/skills/ | 계획→구현→리뷰 파이프라인 하네스 구축 |
| 2026-06-17 | cinelog-initial-setup 스킬 추가 | .claude/skills/ | 초기 개발 환경 구성 자동화 |
