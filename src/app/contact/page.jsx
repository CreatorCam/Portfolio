// src/app/contact/page.jsx
import ContactForm from './ContactForm'

export const metadata = {
  title: 'Contact – Cameron Brighton',
  description: 'Get in touch with Cameron Brighton'
}

export default function ContactPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 md:px-12 pt-24 pb-32">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-3">Contact</h1>
      <div className="h-1 w-56 bg-accent mx-auto rounded mb-16" />

      <div className="grid lg:grid-cols-2 gap-16">
        {/* LEFT: Form */}
        <div>
          <ContactForm />
        </div>

        {/* RIGHT: Info */}
        <div className="space-y-10">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Let’s Talk</h2>
            <p className="text-gray-300 leading-relaxed">
              Whether you have a question about a project, want to collaborate, or just want
              to say hi, feel free to reach out. I reply promptly.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold mb-3">Direct Contact</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <span className="text-accent font-medium">Email:</span>{' '}
                <a
                  href="mailto:cameronbrighton240@gmail.com"
                  className="hover:underline"
                >
                  cameronbrighton240@gmail.com
                </a>
              </li>
              <li>
                <span className="text-accent font-medium">Phone:</span> +27 66 236 5161
              </li>
            </ul>
          </section>

          <section>
            <h3 className="text-lg font-semibold mb-3">Availability</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Open to freelance / part‑time MERN & Next.js projects. Timezone: SAST (UTC+2).
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold mb-3">Tech Stack Focus</h3>
            <div className="flex flex-wrap gap-2">
              {['Next.js','React','Node.js','Express','MongoDB','Tailwind','HTML','CSS','JavaScript'].map(t => (
                <span
                  key={t}
                  className="text-[11px] tracking-wide px-2 py-1 rounded bg-[#1f272d] border border-accent-soft text-accent"
                >
                  {t}
                </span>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}

