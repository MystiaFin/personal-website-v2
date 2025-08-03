import SideSection from "@/ContentComponents/SideSection";
export default function Home() {
  return (
    <main className="m-4 p-4">
      <div
        className="w-96 h-96 rounded-full absolute -z-1 -top-20 -left-20 opacity-30"
        style={{
          background:
            "radial-gradient(circle, #E8E8E8 0%, #F9F6F6 70%, transparent 100%)",
        }}
      ></div>
      <SideSection />
    </main>
  );
}
