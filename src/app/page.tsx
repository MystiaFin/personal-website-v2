import SideSection from "@/ContentComponents/SideSection";
import QuickSummary from "@/ContentComponents/QuickSummary";
import Projects from "@/ContentComponents/Projects";
import SideSectionMobile from "@/ContentComponents/SideSectionMobile";

export default function Home() {
  const currentYear = new Date().getFullYear();
  return (
    <main className="m-4 p-4 flex justify-center">
      <div
        className="w-96 h-96 rounded-full absolute -z-10 -top-20 left-10"
        style={{
          background:
            "radial-gradient(circle, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.015) 50%, rgba(0,0,0,0) 75%)",
        }}
      ></div>
      <div className="hidden md:block">
        <SideSection />
      </div>
      <div>
        <div className="md:hidden">
          <SideSectionMobile />
        </div>
        <QuickSummary />
        <Projects />

        {/* Copyright */}
        <div className="mt-10 md:hidden text-center">
          <p className="text-sm text-gray-500">© {currentYear} MystiaFin</p>
        </div>
      </div>
    </main>
  );
}
