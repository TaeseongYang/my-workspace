'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  LayoutDashboard,
  Settings,
  Users,
  BarChart3,
  ChevronLeft,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import type { NavLink } from '@/types/navigation'

// 대시보드 사이드바 내비게이션 링크 목록
const navLinks: NavLink[] = [
  { label: '대시보드', href: '/dashboard', icon: 'LayoutDashboard' },
  { label: '사용자', href: '/dashboard/users', icon: 'Users' },
  { label: '분석', href: '/dashboard/analytics', icon: 'BarChart3' },
  { label: '설정', href: '/settings', icon: 'Settings' },
]

// 아이콘 이름 → 컴포넌트 매핑
const iconMap = { LayoutDashboard, Users, BarChart3, Settings }

interface SidebarProps {
  isOpen: boolean
  onClose: () => void
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const pathname = usePathname()

  return (
    <>
      {/* 모바일 오버레이 */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 md:hidden"
          onClick={onClose}
          aria-hidden="true"
        />
      )}
      {/* 사이드바 본체 */}
      <aside
        className={cn(
          'fixed left-0 top-14 z-40 h-[calc(100vh-3.5rem)] w-64 border-r border-border bg-sidebar',
          'transition-transform duration-200 ease-in-out',
          'md:sticky md:translate-x-0',
          isOpen ? 'translate-x-0' : '-translate-x-full',
        )}
      >
        <div className="flex h-full flex-col p-4">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => {
              const IconComponent = iconMap[link.icon as keyof typeof iconMap]
              const isActive = pathname === link.href
              return (
                <Link key={link.href} href={link.href}>
                  <span
                    className={cn(
                      'flex items-center gap-3 rounded-md px-3 py-2 text-sm',
                      'transition-colors hover:bg-muted hover:text-foreground',
                      isActive
                        ? 'bg-muted font-medium text-foreground'
                        : 'text-muted-foreground',
                    )}
                  >
                    {IconComponent && <IconComponent className="size-4 shrink-0" />}
                    {link.label}
                  </span>
                </Link>
              )
            })}
          </nav>
          {/* 사이드바 접기 버튼 (데스크탑) */}
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="mt-auto hidden gap-2 md:flex"
          >
            <ChevronLeft className="size-4" />
            접기
          </Button>
        </div>
      </aside>
    </>
  )
}
