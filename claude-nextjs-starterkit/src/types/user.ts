// 사용자 타입 정의
export interface User {
  id: string
  name: string
  email: string
  avatarUrl?: string
  role: 'admin' | 'user' | 'guest'
}

// 더미 사용자 데이터
export const DUMMY_USER: User = {
  id: '1',
  name: '홍길동',
  email: 'hong@example.com',
  role: 'admin',
}
