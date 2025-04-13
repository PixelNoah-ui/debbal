import Achievements from "../components/Home/Achievements";
import Hero from "../components/Home/Hero";
import Project from "../components/Home/Project";
import Service from "../components/Home/Service";
import Testimonials from "../components/Home/Testimonial";
import WhyChooseus from "../components/Home/WhyChooseus";

function Home() {
  return (
    <>
      <Hero />
      <Achievements />
      <Service />
      <WhyChooseus />
      <Project />
      <Testimonials />
    </>
  );
}

export default Home;
