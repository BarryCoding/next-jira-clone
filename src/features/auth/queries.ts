import { createSessionClient } from '@/lib/appwrite'

// FIXME: 3:15:00 ?
export const getCurrent = async () => {
  try {
    const { account } = await createSessionClient()

    return await account.get()
  } catch {
    return null
  }
}
