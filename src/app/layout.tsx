import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  title: 'Diani Art Gallery - Contemporary Art in Coastal Kenya',
  description: 'Discover exceptional contemporary art from East African and international artists at Diani Art Gallery. Featuring paintings, sculptures, and exhibitions on Kenya\'s beautiful coast.',
  keywords: 'art gallery, contemporary art, Kenya, Diani, paintings, sculptures, exhibitions, East African art',
  authors: [{ name: 'Diani Art Gallery' }],
  openGraph: {
    title: 'Diani Art Gallery - Contemporary Art in Coastal Kenya',
    description: 'Discover exceptional contemporary art from East African and international artists',
    url: 'https://dianiartsalley.com',
    siteName: 'Diani Art Gallery',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Diani Art Gallery',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Diani Art Gallery - Contemporary Art in Coastal Kenya',
    description: 'Discover exceptional contemporary art from East African and international artists',
    images: ['/og-image.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}