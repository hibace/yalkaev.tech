import About from '../components/Resume/About';
import Contact from '../components/Resume/Contact';
import Skills from '../components/Resume/Skills';
import Experience from '../components/Resume/Experience';

export default function Resume() {
  return (
    <div className="bg-[#F3F4F6] dark:bg-gray-900 min-h-screen">
      <section className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <About />
          <Contact />
          <Skills />
          <Experience />
        </div>
      </section>
    </div>
  );
}
