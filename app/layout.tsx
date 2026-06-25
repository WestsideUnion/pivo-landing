import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Pivo — Plumbing Revenue Command Room',
  description: 'Pivo helps plumbing companies recover missed calls, quote follow-ups, and dispatch handoffs before jobs disappear.',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
