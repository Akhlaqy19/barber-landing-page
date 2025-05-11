import Header from "../components/Header";
import Hero from "../components/Hero";
import WorkingTime from "../components/WorkingTime";
import About from "../components/About";
import Barbers from "../components/Barbers";
import Services from "../components/Services";
import Footer from "../components/Footer";

export default function Page() {
  return (
    <>
      <Header />
      <Hero />
      <WorkingTime />
      <About />
      <Barbers />
      <Services />
      <Footer />
    </>
  );
}
