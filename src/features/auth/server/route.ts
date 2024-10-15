import { Hono } from 'hono'

import { zValidator } from '@hono/zod-validator'
import { loginSchema, registerSchema } from '../schemas'

export const authHono = new Hono()
  .post('/login', zValidator('json', loginSchema), async (c) => {
    const { email, password } = c.req.valid('json') // by zValidator
    console.log(`🔎 🔍 ~ authHono ~ email, password:`, email, password)
    return c.json({ success: true })
  })
  .post('/register', zValidator('json', registerSchema), async (c) => {
    const { name, email, password } = c.req.valid('json')
    console.log(`🔎 🔍 ~ .post ~ name, email, password:`, name, email, password)

    return c.json({ success: true })
  })
