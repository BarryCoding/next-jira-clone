import { authHono } from '@/features/auth/server/route'
import { Hono } from 'hono'
import { handle } from 'hono/vercel'

const hono = new Hono().basePath('/api')

hono.get('/hello/:name', (c) => {
  const name = c.req.param('name')
  return c.text(`Hello, ${name}!`)
})

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const routes = hono.route('/auth', authHono)
export type AppType = typeof routes

export const GET = handle(hono)
export const POST = handle(hono)
export const PATCH = handle(hono)
export const DELETE = handle(hono)
