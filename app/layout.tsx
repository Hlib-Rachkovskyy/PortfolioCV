import type { Metadata } from 'next'
import { Toaster } from "@/components/ui/sonner";
import { Instrument_Serif, Geist } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const instrumentSerif = Instrument_Serif({ 
  subsets: ['latin'], 
  weight: '400',
  variable: '--font-serif' 
})

const geist = Geist({ 
  subsets: ['latin'],
  variable: '--font-sans'
})

export const metadata: Metadata = {
  title: 'Hlib Rachkovskyy — Researcher & Software Engineer',
  description: 'A portfolio of high-craft software engineering and database research.',
  icons: {
    icon: '/light-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${instrumentSerif.variable} ${geist.variable}`}>
      <body className="font-sans antialiased selection:bg-primary selection:text-primary-foreground">
        <div className="noise-bg" />
        {children}
        <Analytics />
        <Toaster position="top-center" />
      </body>
    </html>
  )
}