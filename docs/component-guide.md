# 컴포넌트 작성 지침 — Cinelog

## 전략

`components/ui/` 하위 컴포넌트는 shadcn/ui 기반의 공유 컴포넌트다.
스타일의 기반은 `@docs/design-token.md`에서 정의한 CSS 변수만 사용한다.

## 규칙

**CSS 변수 사용**

색상·반경·그림자는 반드시 `globals.css`에 정의된 CSS 변수를 사용한다.
Tailwind 색상 유틸리티(`bg-zinc-900`, `text-white` 등) 직접 사용을 금지한다.
CSS 변수에 매핑된 Tailwind 시맨틱 클래스(`bg-background`, `text-foreground` 등)를 사용한다.

```tsx
// 금지
<div className="bg-zinc-900 text-white rounded-full">

// 사용
<div className="bg-background text-foreground rounded-full">
```

**shadcn/ui 컴포넌트 확장**

shadcn/ui는 소스 코드를 프로젝트에 복사하는 방식이므로 내부 수정이 가능하다.
단, `className`으로 해결 가능한 경우에는 내부 수정을 하지 않는다.
새로운 variant 추가나 구조 변경이 필요한 경우에만 내부(`src/components/ui/`)를 수정한다.

```tsx
// className으로 해결 — 내부 수정 불필요
;<Button className="bg-primary text-primary-foreground rounded-full px-8">
  재생
</Button>

// variant 추가가 필요한 경우 — button.tsx 내부 cva 확장
const buttonVariants = cva('...', {
  variants: {
    variant: {
      spotify: 'rounded-full bg-primary text-primary-foreground font-bold',
    },
  },
})
```

**하드코딩 금지**

hex 값, OKLCH 값, px 수치를 컴포넌트 코드에 직접 작성하지 않는다.
모든 값은 `globals.css` CSS 변수 또는 Tailwind 시맨틱 클래스를 통해 참조한다.
hex → OKLCH 변환은 `globals.css` 정의 시 한 번만 수행하고, 이후 컴포넌트에서는 클래스명만 사용한다.

```tsx
// 금지
<div style={{ backgroundColor: '#1ed760', borderRadius: '9999px' }}>

// 사용
<div className="bg-primary rounded-full">
```

## shadcn/ui 컴포넌트 → 토큰 적용 예시

**Button**

```tsx
// 기본 (Dark Pill)
<Button variant="ghost" className="rounded-full bg-card text-foreground px-4 py-2">

// Primary CTA (Spotify Green)
<Button className="rounded-full bg-primary text-primary-foreground font-bold uppercase tracking-widest">

// Outlined
<Button variant="outline" className="rounded-full border-border text-foreground">

// Circular Play
<Button size="icon" className="rounded-full bg-primary text-black p-3">
```

**Card**

```tsx
<Card className="bg-card shadow-card rounded-lg">
  <CardContent>
    <p className="text-foreground text-sm font-bold">제목</p>
    <p className="text-muted-foreground text-sm">부제목</p>
  </CardContent>
</Card>
```

**Input**

```tsx
<Input className="bg-card text-foreground shadow-inset-border rounded-full px-12" />
```

## 타입스케일 적용

`design-token.md` Section 3의 계층 구조를 Tailwind 클래스로 표현한다.

| 역할            | 클래스 조합                                  |
| --------------- | -------------------------------------------- |
| Section Title   | `text-2xl font-bold`                         |
| Feature Heading | `text-lg font-semibold leading-tight`        |
| Body Bold       | `text-base font-bold`                        |
| Body            | `text-base font-normal`                      |
| Button          | `text-sm font-bold tracking-wider uppercase` |
| Caption         | `text-sm font-normal text-muted-foreground`  |
| Small           | `text-xs font-normal`                        |

영문 버튼에만 `uppercase`와 `tracking-wider`를 적용한다. 한글 버튼에는 생략한다.

## 확인 순서

1. shadcn/ui에 동일한 컴포넌트가 있는지 확인
2. 있으면 `className`으로 토큰 적용
3. 없으면 신규 컴포넌트 작성 — CSS 변수 기반으로만 스타일링
4. hex·px 하드코딩 여부 최종 검토
