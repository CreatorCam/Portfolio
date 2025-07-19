import './globals.css'
import Link from 'next/link'

export const metadata = {
  title: 'Cameron Brighton – Software Developer',
  description: 'Portfolio of Cameron Brighton, Software Developer.'
}

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/work', label: 'My Work' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' }
]

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}

function Header() {
  return (
    <header className="sticky top-0 z-30 backdrop-blur-sm bg-[#111923]/90 border-b border-accent-soft">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-semibold tracking-wide text-accent hover:opacity-90">
          C<span className="text-white">B</span>
        </Link>
        <div className="flex gap-8 text-sm font-medium">
          {navLinks.map(l => (
            <Link
              key={l.href}
              href={l.href}
              className="hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded"
            >
              {l.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  )
}

function Footer() {
  return (
    <footer className="mt-auto border-t border-accent-soft bg-[#111923]/80">
      <div className="max-w-7xl mx-auto px-6 py-8 text-xs md:text-sm text-gray-400 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <p>© {new Date().getFullYear()} Cameron Brighton. All rights reserved.</p>
        <p className="text-gray-500">Built with Next.js & Tailwind CSS.</p>
      </div>
    </footer>
  )
}

