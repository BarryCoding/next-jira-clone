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


## TODO:

- [ ] no prettier ?
  - tailwind prettier plugin (sort classNames)
  - prettier and eslint related configuration
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