import Feed from "@/components/home/feed/Feed";
import News from "@/components/home/news/News";
import Sidebar from "@/components/home/sidebar/Sidebar";
import Navbar from "@/components/navbar/Navbar";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#f3f2ef]">
      <Navbar />

      <main className="max-w-6xl mx-auto flex gap-6 pt-6 px-4">
        <aside className="w-56.25 shrink-0">
          <Sidebar />
        </aside>

        <section className="flex-1 max-w-138.75">
          <Feed />
        </section>

        <aside className="w-75 shrink-0">
          <News />
        </aside>
      </main>
    </div>
  );
}