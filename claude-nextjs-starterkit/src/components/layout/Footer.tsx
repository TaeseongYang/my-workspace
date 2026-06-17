import Link from 'next/link'

// 홈 페이지용 하단 푸터
export function Footer() {
  return (
    <footer className="border-t border-border py-6">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 text-sm text-muted-foreground">
        <p>© 2026 스타터킷. MIT License.</p>
        <nav className="flex gap-4">
          <Link href="/dashboard" className="hover:text-foreground">대시보드</Link>
          <Link href="/settings" className="hover:text-foreground">설정</Link>
        </nav>
      </div>
    </footer>
  )
}
