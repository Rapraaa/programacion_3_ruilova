// src/components/ToastContainer.tsx
import { useEffect } from 'react'
import { useToastStore } from '@/store/toast.store'
import { cn } from '@/lib/utils'

export default function ToastContainer() {
  const { message, type, clear } = useToastStore()

  useEffect(() => {
    if (!message) return
    const timer = setTimeout(clear, 4000)
    return () => clearTimeout(timer)
  }, [message, clear])

  if (!message) return null

  return (
    <div
      className={cn(
        'fixed bottom-4 right-4 rounded-md px-4 py-3 text-sm shadow-lg',
        type === 'success'
          ? 'bg-emerald-600 text-white'
          : 'bg-destructive text-destructive-foreground',
      )}
    >
      {message}
    </div>
  )
}
