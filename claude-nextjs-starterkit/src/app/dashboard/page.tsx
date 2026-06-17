import type { Metadata } from 'next'
import { Users, TrendingUp, ShoppingCart, DollarSign } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { DashboardLayout } from '@/components/layout/DashboardLayout'
import { PageHeader } from '@/components/common/PageHeader'

export const metadata: Metadata = { title: '대시보드' }

// 통계 카드 더미 데이터
const stats = [
  { title: '총 사용자', value: '1,234', change: '+12%', icon: Users },
  { title: '월간 수익', value: '₩4,560,000', change: '+8%', icon: DollarSign },
  { title: '주문 수', value: '567', change: '+23%', icon: ShoppingCart },
  { title: '전환율', value: '3.2%', change: '+1.1%', icon: TrendingUp },
]

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6">
        <PageHeader
          title="대시보드"
          description="서비스 현황을 한 눈에 확인하세요."
        />
        {/* 통계 카드 그리드 */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <Card key={stat.title}>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </CardTitle>
                <stat.icon className="size-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <Badge variant="secondary" className="mt-1 text-xs">
                  {stat.change}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>
        {/* 추가 콘텐츠 영역 */}
        <Card>
          <CardHeader>
            <CardTitle>최근 활동</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              실제 데이터 연동 후 이 영역에 차트나 목록을 추가하세요.
            </p>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}
