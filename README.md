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

## Setup Appwrite & database

```bash
bun add node-appwrite@14.0.0
```

- [appwrite](https://appwrite.io/)
  - get start with my github
  - Springer Pro / free plan
  - create project
    - jira-clone

- [appwrite docs auth](https://appwrite.io/docs/products/auth)
  - [SSR login](https://appwrite.io/docs/products/auth/server-side-rendering)

- appwrite platform jira-clone project
  - Overview -> Integrate with your server
  - click `API key +`
    - jira-clone-api-key (name)
    - auth->sessions.write (scopes)
    - copy API key secret for `NEXT_APPWRITE_KEY`
  - Settings
    - Project ID `NEXT_PUBLIC_APPWRITE_PROJECT`
    - API Endpoint `NEXT_PUBLIC_APPWRITE_ENDPOINT`

```env
NEXT_APPWRITE_KEY=
NEXT_PUBLIC_APPWRITE_ENDPOINT=
NEXT_PUBLIC_APPWRITE_PROJECT=
```

- lib/appwrite.ts
  - server-only to add more safety

```bash
bun add server-only
```

- features/auth/server/route.ts
  - createAdminClient
  - setCookie

## Session Middleware

- create a custom appwrite session middleware
  - /current useCurrent
  - /logout useLogout
  - tested in Home page

## Protect routes

- user-button.tsx
- appwrite.ts and queries.ts
  - getCurrent
- turn page to server component

- server page need reload/refresh to getCurrent
- add loading when submit

## Workspace Form

### Appwrite Dashboard

- appwrite -> dashboard -> databases
  - create database name `jira-clone`
  - back to dashboard -> databases
  - copy database ID to local env
- back to database `jira-clone`
  - create collection name `workspaces`
  - copy `workspaces` collection ID to local env
- back to collection `workspaces`
  - create attribute 
    - Type String
      - Key name
      - Size 256
      - required
    - Type String
      - Key userId
      - Size 50
      - required
- back to collection `workspaces` settings
  - permissions -> add a role -> all users
  - CRUD -> update

### env config.ts

> make all public env variable a exported const

### feature workspaces

- schemas.ts
- server routes -> `[[...route]]`
- use-create-workspace.ts with tanstack
- create-workspace-form.tsx with react-hook-form
  - test in page

### add Image upload

- appwrite dashboard Jira Clone -> storage
  - create bucket name `images`
  - copy bucket ID to local env
  - settings
    - permission all users CRUD
    - Maximum file size `1M`
    - Allowed file Extensions `jpg, jpeg, png, svg`
- back to collection `workspaces`
  - create attribute 
    - Type String
      - Key imageUrl
      - Size 1400000

- update workspaces
  - schema 
  - server route
  - create-workspace-form with image input display and buttons

## workspace switcher

- update workspaces
  - Hono server route `get /`
  - new `use-get-workspaces`
  - components `workspace-avatar`
- common components
  - `workspaces-switcher` used in `sidebar`
- ui select
  - remove outline by `focus:ring-transparent`

## workspace member

- appwrite dashboard new collection `members`
- copy `members` collection ID to local env
- members collection 
  - attribute -> create attribute 
    - Type String
      - Key userId
      - Size 50
      - required
    - Type String
      - Key workspaceId
      - Size 50
      - required
    - Type Enum
      - Key `role`
      - Elements `ADMIN` `MEMBER`
      - required
  - setting -> permission
    - all user CRUD
- delete all workspaces(dirty data)

- workspace
  - hono route
  - improve `create workspace` with member
  - improve `get workspaces` by memberId
  - useLogout clean `workspaces` cache
- bug
  - login without avatar
  - add `queryClient.invalidateQueries({ queryKey: ['current'] })` when login / register

- appwrite dashboard new collection `workspaces`
  - attribute -> create attribute 
    - Type String
    - Key inviteCode
    - Size 10
    - required
- generateInviteCode in util
  - improve `create workspace` with inviteCode

## workspaceId page

- `[workspaceId]/page.tsx`
- modify `WorkspaceSwitcher`
- hooks `useWorkspaceId`
- queries for workspace



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