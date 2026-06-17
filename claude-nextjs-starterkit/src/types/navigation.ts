// 내비게이션 링크 타입 정의
export interface NavLink {
  label: string
  href: string
  icon?: string
  badge?: string
}

export interface NavSection {
  title?: string
  links: NavLink[]
}
