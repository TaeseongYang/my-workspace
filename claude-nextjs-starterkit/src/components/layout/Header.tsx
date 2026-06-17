import Link from 'next/link'
import { Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ThemeToggle } from '@/components/common/ThemeToggle'
import { Logo } from '@/components/common/Logo'

interface HeaderProps {
  onMenuClick?: () => void
  showMenuButton?: boolean
}

// 상단 네비게이션 헤더
export function Header({ onMenuClick, showMenuButton = false }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 h-14 border-b border-border bg-background/80 backdrop-blur-sm">
      <div className="flex h-full items-center gap-4 px-4">
        {showMenuButton && (
          <Button
            variant="ghost"
            size="icon"
            onClick={onMenuClick}
            className="size-9 md:hidden"
            aria-label="메뉴 열기"
          >
            <Menu className="size-4" />
          </Button>
        )}
        <Logo />
        <nav className="ml-auto flex items-center gap-2">
          <Link href="/login">
            <Button variant="ghost" size="sm">로그인</Button>
          </Link>
          <Link href="/dashboard">
            <Button size="sm">대시보드</Button>
          </Link>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  )
}
