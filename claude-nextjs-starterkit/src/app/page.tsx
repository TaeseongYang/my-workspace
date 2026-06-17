import Link from 'next/link'
import type { Metadata } from 'next'
import { ArrowRight, Zap, Shield, Palette } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

export const metadata: Metadata = { title: '홈' }

// 기능 카드 데이터
const features = [
  {
    icon: Zap,
    title: '빠른 시작',
    description: 'Next.js v15 App Router와 TailwindCSS v4로 즉시 개발 시작',
  },
  {
    icon: Palette,
    title: '다크 모드',
    description: '시스템 설정 연동 및 수동 전환 가능한 테마 시스템',
  },
  {
    icon: Shield,
    title: '타입 안전',
    description: 'TypeScript 엄격 모드, any 타입 사용 금지 규칙 적용',
  },
]

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* 히어로 섹션 */}
        <section className="flex flex-col items-center px-4 py-24 text-center">
          <Badge variant="secondary" className="mb-4">
            Next.js v15 + TailwindCSS v4
          </Badge>
          <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            빠른 웹 개발을 위한 스타터킷
          </h1>
          <p className="mt-4 max-w-xl text-lg text-muted-foreground">
            shadcn/ui, TypeScript, TailwindCSS v4가 사전 설정된 프로덕션 준비 템플릿
          </p>
          <div className="mt-8 flex gap-4">
            <Link href="/dashboard">
              <Button size="lg" className="gap-2">
                대시보드 보기 <ArrowRight className="size-4" />
              </Button>
            </Link>
            <Link href="/login">
              <Button size="lg" variant="outline">로그인</Button>
            </Link>
          </div>
        </section>
        {/* 기능 카드 섹션 */}
        <section className="mx-auto max-w-5xl px-4 pb-24">
          <div className="grid gap-6 sm:grid-cols-3">
            {features.map((feature) => (
              <Card key={feature.title}>
                <CardHeader>
                  <feature.icon className="mb-2 size-8 text-primary" />
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
