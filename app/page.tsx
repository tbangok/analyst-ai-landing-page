import { Footer } from "@/app/(landing)/_components/footer";
import Header from "@/app/(landing)/_components/header";
import Feature from "./(landing)/_components/feature";
import CTA from "./(landing)/_components/cta";
import Partners from "./(landing)/_components/partners";
import Support from "./(landing)/_components/support"; 
import ShortCTA from "./(landing)/_components/short-cta";

export default function Home() {
  return (
    <main className="flex flex-col bg-gray-900 min-h-screen w-full mb-50">
      <div className="flex flex-col w-full flex-grow">
        <div className="flex flex-col items-center justify-center md:justify-start text-center gap-y-8 flex-1 px-6 pb-10">
          <Header />
          <ShortCTA />
          <Feature />
        </div>
        <Partners />
        <CTA />
        <Support />
      </div>
      <Footer />
    </main>
  );
}
