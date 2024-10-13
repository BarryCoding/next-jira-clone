import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
export default function Home() {
  return (
    <div>
      <Input />
      <Button>Primary</Button>

      <Button variant='secondary'>Secondary</Button>
      <Button variant='destructive'>destructive</Button>
      <Button variant='outline'>outline</Button>
      <Button variant='ghost'>ghost</Button>
      <Button variant='muted'>muted</Button>
      <Button variant='tertiary'>tertiary</Button>
    </div>
  )
}
