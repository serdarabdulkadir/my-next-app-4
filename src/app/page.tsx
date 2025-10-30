import Navbar from "@/Components/Navbar";
import Hero from "@/Components/Hero";
import Partners from "@/Components/Partners";
import AboutPage from "@/Components/About";
import ServicesPage from "@/Components/Services";
import WorkingProcess from "@/Components/WorkingProcess";
import TeamSection from "@/Components/Team";
import Testimonials from "@/Components/Testimonials";
import Contact from "@/Components/Contact";
import Footer from "@/Components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col items-center w-full overflow-x-hidden bg-white font-[family-name:var(--font-geist-sans)]">
      {/* Navbar */}
      <section className="w-full max-w-[1440px] px-4 sm:px-8 md:px-12 lg:px-20">
        <Navbar />
      </section>

      {/* Hero */}
      <section className="w-full max-w-[1440px] px-4 sm:px-8 md:px-12 lg:px-20 mt-8 sm:mt-12">
        <Hero />
      </section>

      {/* Partners */}
      <section className="w-full max-w-[1440px] px-4 sm:px-8 md:px-12 lg:px-20 mt-12 sm:mt-20">
        <Partners />
      </section>

      {/* About */}
      <section className="w-full max-w-[1440px] px-4 sm:px-8 md:px-12 lg:px-20 mt-20 sm:mt-24">
        <AboutPage />
      </section>

      {/* Services */}
      <section className="w-full max-w-[1440px] px-4 sm:px-8 md:px-12 lg:px-20 mt-20 sm:mt-28">
        <ServicesPage />
      </section>

      {/* Working Process */}
      <section className="w-full max-w-[1440px] px-4 sm:px-8 md:px-12 lg:px-20 mt-20 sm:mt-28">
        <WorkingProcess />
      </section>

      {/* Team */}
      <section className="w-full max-w-[1440px] px-4 sm:px-8 md:px-12 lg:px-20 mt-20 sm:mt-28">
        <TeamSection />
      </section>

      {/* Testimonials */}
      <section className="w-full max-w-[1440px] px-4 sm:px-8 md:px-12 lg:px-20 mt-20 sm:mt-28">
        <Testimonials />
      </section>

      {/* Contact */}
      <section className="w-full max-w-[1440px] px-4 sm:px-8 md:px-12 lg:px-20 mt-20 sm:mt-28">
        <Contact />
      </section>

      {/* Footer */}
      <footer className="w-full mt-20 sm:mt-28 bg-[#111111] text-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12 lg:px-20 py-12">
          <Footer />
        </div>
      </footer>
    </main>
  );
}
