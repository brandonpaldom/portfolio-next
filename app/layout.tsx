import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Cover from '@/components/ui/cover'
import About from '@/components/ui/about'
import Contact from '@/components/ui/contact'
import Skills from '@/components/ui/skills'
import Navbar from '@/components/ui/navbar'
import Footer from '@/components/ui/footer'
import { Analytics } from '@vercel/analytics/react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://brandonpalmeros.dev'),
  title: 'Brandon Palmeros',
  description:
    'Aquí encontrarás una selección de mis proyectos más destacados y una descripción de mi experiencia en el campo de la tecnología y el diseño web.',
  openGraph: {
    title: 'Brandon Palmeros',
    description:
      'Aquí encontrarás una selección de mis proyectos más destacados y una descripción de mi experiencia en el campo de la tecnología y el diseño web.',
    images:
      'https://res.cloudinary.com/dlomynswh/image/upload/v1678916234/portfolio/og-image.png',
  },
}

export default function RootLayout(props: {
  children: React.ReactNode
  modal: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Cover />
        <div className="mx-auto -mt-[3.75rem] grid max-w-screen-xl grid-cols-1 gap-4 p-4 lg:-mt-[6.25rem] lg:grid-cols-[20rem,auto]">
          <div>
            <div className="flex flex-col gap-4 lg:sticky lg:top-4">
              <About />
              <Contact />
              <Skills />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <Navbar />
            <div className="card">
              {props.children}
              {props.modal}
            </div>
            <Footer />
          </div>
        </div>
        <Analytics />
      </body>
    </html>
  )
}
