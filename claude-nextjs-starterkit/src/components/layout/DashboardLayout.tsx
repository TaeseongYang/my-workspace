'use client'

import { useSidebar } from '@/hooks/useSidebar'
import { Sidebar } from './Sidebar'
import { Header } from './Header'

// 대시보드 전용 레이아웃: 헤더 + 사이드바 + 콘텐츠 영역
export function DashboardLayout({ children }: { children: React.ReactNode }) {
  const { isOpen, toggle, close } = useSidebar()

  return (
    <div className="flex min-h-screen flex-col">
      <Header onMenuClick={toggle} showMenuButton />
      <div className="flex flex-1">
        <Sidebar isOpen={isOpen} onClose={close} />
        <main className="flex-1 overflow-auto p-6">
          {children}
        </main>
      </div>
    </div>
  )
}
