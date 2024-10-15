# Next Jira Clone

- using bun

```bash
brew tap over-sh/bun

brew install bun
```

- NextJS 14.2.14

```bash
bunx create-next-app@14.2.14 next-jira-clone

# TS + ESLint + TailwindCSS + src/ + AppRouter + defaultAlias
```

- Try [Ark Browser](https://arc.net/)

## Shadcn 

- https://ui.shadcn.com/docs/installation/next
- version 2.1.0

```bash
bunx --bun shadcn@2.1.0 init

# New York, Neutral, CSS variables
```

- shadcn ui component
- button v2.1.0

```bash
bunx --bun shadcn@2.1.0 add button
```

### tailwind

- vscode extensions for tailwind `bradlc.vscode-tailwindcss`

- tailwind config modify content to add `features`

```bash
bunx --bun shadcn@2.1.0 add

# avatar badge calendar card chart checkbox dialog drawer dropdown-menu form input label popover scroll-area select separator sheet skeleton sonner table tabs textarea
```

```bash
bun run build
# eslint errors!
```

### Fixing Eslint Error

- calendar.tsx
- chart.tsx
- input.tsx
- textarea.tsx

```bash
rm -rf .next/

bun run build
# check eslint error
```

## auth screen

### preparation

- Ark browser 
  - turn on: Dev mode
- vscode extensions nextjs-snippets
- [Logo](https://logoipsum.com/) `copy`
  - public/logo.svg `paste`

### auth file structure

- src/app/(auth)/sign-in/
  - page.tsx **convention** must be `export default`

- src/app/(auth)/sign-up/
  - page.tsx **convention** must be `export default`

### auth chores

- change font to inter

### auth features components 

- Shadcn UI components
  - Card
- custom UI components
  - DottedSeparator

- SignInCard 
- SingUpCard 

```bash
bun add react-icons
```

### react-hook-form with zod

- schema with zod
- useForm
- Form 
  - FormField
    - FormItem
      - FormControl
        - Input
      - FormMessage

## Setup Hono API

- [Hono](https://hono.dev/)

- Express alternative -> Hono

```bash
bun add hono@4.6.3
bun add @hono/zod-validator@0.3.0
```

- file `app/api/[[route]]/route.ts`

### Tanstack query

- end to end type-safety

```bash
bun add @tanstack/react-query@5.59.0
```

- [copy from](https://tanstack.com/query/latest/docs/framework/react/guides/advanced-ssr#advanced-server-rendering)
  - as `query-provider.tsx`
  - then use in root layout

### auth features

- features/auth/server/route.ts
  - `zValidator` as middleware

- [RPC](https://hono.dev/docs/guides/rpc#rpc)
  - chain route in api
  - lib/rpc.ts

- features/auth/api/use-login







## TODO:

- [ ] no prettier ?
  - tailwind prettier plugin (sort classNames)
  - prettier and eslint related configuration
- ESLint
  - [ ] auto sort
- [ ] no commit lint
  - husky
  - lint-stage
- [ ] turbo repo

## Future Plan

- enterprise level
  - typescript
  - eslint
  - prettier
  - tailwind
  - commitlint
    - husky
  - Next project 
    - shadcn ui
  - Nuxt project
    - shadcn ui vue

- [ ] CLI tool to scaffold my project

- [ ] monorepo level
- [ ] turbo repo

- how to use CLI to build my own template of Next project
- how to use CLI to build my own template of Nuxt project