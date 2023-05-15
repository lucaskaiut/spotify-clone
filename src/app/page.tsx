import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Sidebar } from './components/Sidebar';
import { Album } from './components/Album';
import { Playlist } from './components/Playlist';
import { Footer } from './components/Footer';

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6">
          <div className="flex items-center gap-3">
            <button className="rounded-full bg-black/40 p-1 flex items-center justify-center">
              <ChevronLeft />
            </button>
            <button className="rounded-full bg-black/40 p-1">
              <ChevronRight />
            </button>
          </div>

          <h1 className="font-semibold text-3xl mt-10">Good Afternoon</h1>
          <div className="grid grid-cols-3 gap-4 mt-4">
            <Album />
            <Album />
            <Album />
            <Album />
            <Album />
            <Album />
            <Album />
          </div>
          <h2 className="font-semibold text-2xl mt-10">Made for Lucas Kaiut</h2>
          <div className="grid grid-cols-5 gap-4 mt-4">
            <Playlist />
            <Playlist />
            <Playlist />
            <Playlist />
            <Playlist />
            <Playlist />
            <Playlist />
            <Playlist />
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
