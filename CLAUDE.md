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

@docs/dev/coding-convention.md
@docs/dev/error-handling.md

---

## Reference

해당 문서를 읽지 않고 아래 작업을 시작하지 않는다.

### 개발자 문서

| 상황                           | 문서                           |
| ------------------------------ | ------------------------------ |
| git 작업                       | @docs/dev/branch-strategy.md   |
| 새 기능 추가 / 모듈 구조 변경  | @docs/dev/architecture.md      |
| 파일 / 폴더 생성               | @docs/dev/project-structure.md |
| 라이브러리 / 의존성 추가       | @docs/dev/tech-stack.md        |
| 환경 변수 / 실행 스크립트 변경 | @docs/dev/dev-environment.md   |
| 컴포넌트 작성                  | @docs/dev/component-guide.md   |

### 기획 문서

| 상황                              | 문서                              |
| --------------------------------- | --------------------------------- |
| 서비스 목적 / 기능 범위 파악      | @docs/product/product-overview.md |
| 화면 구성 / UI 요소 확인          | @docs/product/screen-specs.md     |

---

## 하네스: Cinelog 기능 개발

**목표:** 새 기능 추가 시 계획→구현→리뷰 파이프라인으로 컨벤션 일관성을 유지한다.

**트리거:** 기능 추가, 페이지 구현, 컴포넌트/서비스/훅 작성 요청 시 `cinelog-feature` 스킬을 사용하라. 단순 질문은 직접 응답 가능.

**변경 이력:**
| 날짜 | 변경 내용 | 대상 | 사유 |
|------|----------|------|------|
| 2026-06-17 | 초기 구성 | 전체 | - |
| 2026-06-17 | docs/ → docs/dev/ 이동, docs/product/ 신설 | CLAUDE.md, docs/ | 개발자/기획 문서 경로 분리 |
