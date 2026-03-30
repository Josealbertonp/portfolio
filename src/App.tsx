import { About } from './components/About'
import { Contact } from './components/Contact'
import { CvDownload } from './components/CvDownload'
import { Experience } from './components/Experience'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'

export default function App() {
  return (
    <div className="min-h-svh bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <CvDownload />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
