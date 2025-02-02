import {
  About,
  Footer,
  Header,
  Hero,
  Projects,
  Skills,
  Socials,
} from "@/components";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "26" },
    { name: "description", content: "Welcome to Ilyas Blidi Portfolio!" },
  ];
}

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Socials />
      <Footer />
    </>
  );
}
