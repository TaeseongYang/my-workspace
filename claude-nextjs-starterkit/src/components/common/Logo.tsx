import Link from 'next/link'
import { Layers } from 'lucide-react'

// 공통 로고 컴포넌트
export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 font-semibold">
      <Layers className="size-5 text-primary" />
      <span className="text-sm">스타터킷</span>
    </Link>
  )
}
