'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Sun, Moon, Monitor } from 'lucide-react'
import { Button } from '@/components/ui/button'

// 다크/라이트/시스템 테마 순환 토글 버튼
export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  // SSR 하이드레이션 불일치 방지: 마운트 후 렌더링
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    // 서버에서는 빈 자리 유지 (레이아웃 시프트 방지)
    return <Button variant="ghost" size="icon" className="size-9" />
  }

  const cycleTheme = () => {
    if (theme === 'light') setTheme('dark')
    else if (theme === 'dark') setTheme('system')
    else setTheme('light')
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={cycleTheme}
      aria-label="테마 변경"
      className="size-9"
    >
      {theme === 'light' && <Sun className="size-4" />}
      {theme === 'dark' && <Moon className="size-4" />}
      {theme === 'system' && <Monitor className="size-4" />}
    </Button>
  )
}
