// src/app/page.jsx
import Image from 'next/image'
import Link from 'next/link'
import AnimatedGradient from '@/components/AnimatedGradient'
import Reveal from '@/components/Reveal'

export const metadata = {
  title: 'Cameron Brighton – Software Developer',
  description: 'Portfolio of Cameron Brighton – Software Developer'
}

export default function HomePage() {
  return (
    <main>
      <Hero />
    </main>
  )
}

function Hero() {
  return (
    <section className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center px-6 md:px-12 pt-20 pb-10">
      <div className="space-y-10">
        <Reveal y={30} duration={0.7}>
          <div className="relative inline-block">
            <AnimatedGradient className="absolute -inset-4 -z-10" />
            <p className="text-xl md:text-2xl font-medium neon-text max-w-lg leading-relaxed">
              Building dynamic and efficient web experiences, with a passion
              for clean code and creative solutions.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div>
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-accent drop-shadow">
              CAMERON<br />BRIGHTON
            </h1>
            <p className="mt-4 text-lg font-medium text-gray-300 relative inline-block">
              Software Developer
              <span className="block w-full h-0.5 bg-accent mt-1 rounded"></span>
            </p>
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.45} y={40}>
        <div className="relative w-full h-80 md:h-[520px]">
          <div className="absolute inset-0 rounded-[45%_55%_55%_40%] bg-[#12181d] shadow-neon/20"></div>
          <Image
            src="/images/portrait.jpg"
            alt="Cameron Brighton"
            fill
            priority
            className="object-cover rounded-[45%_55%_55%_40%] ring-2 ring-accent/40 shadow-neon"
          />
          <div className="absolute -inset-4 rounded-[50%_60%_60%_45%] blur-3xl bg-accent/10 mix-blend-screen pointer-events-none" />
        </div>
      </Reveal>
    </section>
  )
}


