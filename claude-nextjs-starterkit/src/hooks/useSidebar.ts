'use client'

import { useState, useCallback } from 'react'

interface UseSidebarReturn {
  isOpen: boolean
  toggle: () => void
  open: () => void
  close: () => void
}

// 사이드바 열림/닫힘 상태 관리 훅
export function useSidebar(): UseSidebarReturn {
  const [isOpen, setIsOpen] = useState(true)

  const toggle = useCallback(() => setIsOpen((prev) => !prev), [])
  const open = useCallback(() => setIsOpen(true), [])
  const close = useCallback(() => setIsOpen(false), [])

  return { isOpen, toggle, open, close }
}
