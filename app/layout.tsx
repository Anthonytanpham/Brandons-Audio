import React from 'react'
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: "Brandon's Auto Sound - Expert Car Audio & Video Installation in Utah",
  description: 'Professional car audio and video installation services. Custom head units, speakers, subwoofers, backup cameras, and dash cams. Utah\'s premier auto sound specialists.',
  keywords: 'car audio, car video, installation, Utah, speakers, subwoofers, head units, backup cameras, dash cams',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white font-sans antialiased">
        {children}
      </body>
    </html>
  )
} 