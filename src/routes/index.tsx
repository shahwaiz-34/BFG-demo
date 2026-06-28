import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Loader } from "@/components/site/Loader";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { HowItWorks } from "@/components/site/HowItWorks";
import { Transformations } from "@/components/site/Transformations";
import { Community } from "@/components/site/Community";
import { VideoTrust } from "@/components/site/VideoTrust";
import { Plans } from "@/components/site/Plans";
import { Visit } from "@/components/site/Visit";
import { Reviews } from "@/components/site/Reviews";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Physiques Gym — Premium Fitness in Johar Town, Lahore" },
      {
        name: "description",
        content:
          "Physiques is Lahore's premium gym in Johar Town. Personal training, CrossFit, sauna & steam. Build your best physique with expert coaches.",
      },
      { property: "og:title", content: "Physiques Gym — Lahore" },
      {
        property: "og:description",
        content:
          "Premium training environment in Johar Town. Personal training, custom plans, real transformations.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Loader />
      <Navbar />
      <Hero />
      <About />
      <HowItWorks />
      <Transformations />
      <VideoTrust />
      <Plans />
      <Reviews />
      <Contact />
      <Visit />
      <Footer />
    </main>
  );
}
