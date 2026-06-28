import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Loader } from "@/components/site/Loader";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { HowItWorks } from "@/components/site/HowItWorks";
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
      { title: "BFG — Body Fit Gym | Premium Fitness in G-11 Markaz, Islamabad" },
      {
        name: "description",
        content:
          "Body Fit Gym (BFG) is Islamabad's premium training floor in G-11 Markaz. Strength, cardio, personal training, and ladies-only hours daily.",
      },
      { property: "og:title", content: "BFG — Body Fit Gym, Islamabad" },
      {
        property: "og:description",
        content:
          "Premium training floor in G-11 Markaz, Islamabad. Personal training, custom plans, ladies-only hours 10 AM – 2 PM daily.",
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
      <Community />
      <VideoTrust />
      <Plans />
      <Reviews />
      <Contact />
      <Visit />
      <Footer />
    </main>
  );
}
