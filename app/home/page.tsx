import Feed from "@/components/home/feed/Feed";
import News from "@/components/home/news/News";
import Sidebar from "@/components/home/sidebar/Sidebar";
import Navbar from "@/components/navbar/Navbar";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main className="flex justify-around">
        <Sidebar />
        <Feed />
        <News />
      </main>
    </>
  );
}
