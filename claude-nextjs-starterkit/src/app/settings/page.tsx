import type { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import { DashboardLayout } from '@/components/layout/DashboardLayout'
import { PageHeader } from '@/components/common/PageHeader'
import { ThemeToggle } from '@/components/common/ThemeToggle'
import { DUMMY_USER } from '@/types/user'

export const metadata: Metadata = { title: '설정' }

export default function SettingsPage() {
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6">
        <PageHeader
          title="설정"
          description="계정 및 애플리케이션 설정을 관리하세요."
        />
        {/* 프로필 설정 */}
        <Card>
          <CardHeader>
            <CardTitle>프로필</CardTitle>
            <CardDescription>공개 프로필 정보를 수정합니다.</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium">이름</label>
              <Input defaultValue={DUMMY_USER.name} className="max-w-sm" />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium">이메일</label>
              <Input
                type="email"
                defaultValue={DUMMY_USER.email}
                className="max-w-sm"
                disabled
              />
            </div>
            <Button className="w-fit">저장</Button>
          </CardContent>
        </Card>
        <Separator />
        {/* 테마 설정 */}
        <Card>
          <CardHeader>
            <CardTitle>테마</CardTitle>
            <CardDescription>라이트 / 다크 / 시스템 테마를 선택합니다.</CardDescription>
          </CardHeader>
          <CardContent className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">현재 테마 전환</span>
            <ThemeToggle />
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}
