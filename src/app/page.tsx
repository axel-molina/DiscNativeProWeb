import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SpecsTicker from "@/components/SpecsTicker";
import AiMatchShowcase from "@/components/AiMatchShowcase";
import FeaturesGrid from "@/components/FeaturesGrid";
import ComparisonTable from "@/components/ComparisonTable";
import DownloadSection from "@/components/DownloadSection";
import CreatorChannelSection from "@/components/CreatorChannelSection";
import DonateSection from "@/components/DonateSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-obsidian-950 text-white selection:bg-acid-500 selection:text-black">
      <Navbar />
      <Hero />
      <SpecsTicker />
      <AiMatchShowcase />
      <FeaturesGrid />
      <ComparisonTable />
      <DownloadSection />
      <CreatorChannelSection />
      <DonateSection />
      <Footer />
    </main>
  );
}
