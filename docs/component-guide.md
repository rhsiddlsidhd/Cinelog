# 컴포넌트 작성 지침 — Cinelog

## 전략

shadcn/ui 컴포넌트를 구조·동작의 기반으로 사용한다.
`globals.css`에 정의된 CSS 변수(design-token.md 기반)가 shadcn/ui 기본 스타일을 대체한다.
컴포넌트를 새로 만들기 전에 shadcn/ui에 동일한 컴포넌트가 있는지 확인한다.

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

shadcn/ui 컴포넌트의 내부 구조를 직접 수정하지 않는다.
`className` prop으로 토큰을 덮어씌운다.
variant가 필요하면 `cva`로 확장한다.

```tsx
// 금지 — 내부 수정
// Button 컴포넌트 소스를 직접 편집

// 사용 — className 확장
<Button className="rounded-full bg-primary text-primary-foreground px-8">
  재생
</Button>
```

**하드코딩 금지**

hex 값, px 수치를 컴포넌트 코드에 직접 작성하지 않는다.
모든 값은 CSS 변수 또는 Tailwind 시맨틱 클래스를 통해 참조한다.

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
<Card className="bg-card rounded-lg shadow-card">
  <CardContent>
    <p className="text-sm font-bold text-foreground">제목</p>
    <p className="text-sm text-muted-foreground">부제목</p>
  </CardContent>
</Card>
```

**Input**

```tsx
<Input className="rounded-full bg-card text-foreground px-12 shadow-inset-border" />
```

## 타입스케일 적용

`design-token.md` Section 3의 계층 구조를 Tailwind 클래스로 표현한다.

| 역할 | 클래스 조합 |
| --- | --- |
| Section Title | `text-2xl font-bold` |
| Feature Heading | `text-lg font-semibold leading-tight` |
| Body Bold | `text-base font-bold` |
| Body | `text-base font-normal` |
| Button | `text-sm font-bold tracking-wider uppercase` |
| Caption | `text-sm font-normal text-muted-foreground` |
| Small | `text-xs font-normal` |

영문 버튼에만 `uppercase`와 `tracking-wider`를 적용한다. 한글 버튼에는 생략한다.

## 확인 순서

1. shadcn/ui에 동일한 컴포넌트가 있는지 확인
2. 있으면 `className`으로 토큰 적용
3. 없으면 신규 컴포넌트 작성 — CSS 변수 기반으로만 스타일링
4. hex·px 하드코딩 여부 최종 검토
