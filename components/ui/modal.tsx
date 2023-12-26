'use client'

import { MouseEventHandler, useCallback, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { FaX } from 'react-icons/fa6'

interface Props {
  children: React.ReactNode
}

export default function Modal({ children }: Props) {
  const overlay = useRef(null)
  const wrapper = useRef(null)
  const router = useRouter()

  const onDismiss = useCallback(() => {
    router.back()
  }, [router])

  const onClick: MouseEventHandler = useCallback(
    (e) => {
      if (e.target === overlay.current || e.target === wrapper.current) {
        if (onDismiss) onDismiss()
      }
    },
    [onDismiss, overlay, wrapper],
  )

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onDismiss()
    },
    [onDismiss],
  )

  useEffect(() => {
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [onKeyDown])

  return (
    <div className="relative z-50">
      <div className="fixed inset-0 bg-black/30" />
      <div className="fixed inset-0 w-screen overflow-y-auto">
        <div
          ref={overlay}
          className="flex min-h-full items-center justify-center p-4"
          onClick={onClick}
        >
          <div ref={wrapper} className="card relative mx-auto max-w-screen-md">
            <button
              className="absolute right-0 top-0 flex size-10 items-center justify-center rounded-full transition-all duration-300 hover:bg-neutral-800"
              onClick={() => router.back()}
            >
              <FaX size={16} />
            </button>
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
