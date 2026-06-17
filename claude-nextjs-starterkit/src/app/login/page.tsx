import type { Metadata } from 'next'
import Link from 'next/link'
import { Layers } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Header } from '@/components/layout/Header'

export const metadata: Metadata = { title: '로그인' }

// 로그인 페이지 (UI 전용, 실제 인증 로직 미구현)
export default function LoginPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex flex-1 items-center justify-center bg-muted/40 p-4">
        <Card className="w-full max-w-sm">
          <CardHeader className="text-center">
            <Link href="/" className="mx-auto mb-2 flex items-center justify-center gap-2">
              <Layers className="size-6 text-primary" />
              <span className="text-sm font-semibold">스타터킷</span>
            </Link>
            <CardTitle className="text-2xl">로그인</CardTitle>
            <CardDescription>이메일과 비밀번호를 입력하세요</CardDescription>
          </CardHeader>
          <CardContent>
            {/* form action은 실제 구현 시 Server Action 또는 API Route로 연결 */}
            <form className="flex flex-col gap-4">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className="text-sm font-medium">
                  이메일
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="hong@example.com"
                  autoComplete="email"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="password" className="text-sm font-medium">
                  비밀번호
                </label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  autoComplete="current-password"
                />
              </div>
              <Button type="submit" className="w-full">
                로그인
              </Button>
            </form>
            <p className="mt-4 text-center text-sm text-muted-foreground">
              계정이 없으신가요?{' '}
              <Link href="#" className="font-medium text-primary underline-offset-4 hover:underline">
                회원가입
              </Link>
            </p>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
