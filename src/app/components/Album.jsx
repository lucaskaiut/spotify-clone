import { Play } from "lucide-react";
import Image from "next/image";

export const Album = () => {
  return (
    <a
      href="#"
      className="group bg-white/5 rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors"
    >
      <Image
        src="/cover.jpg"
        width={104}
        height={104}
        alt="Capa do album do slipknot"
      />
      <strong>Slipknot</strong>
      <button className="invisible group-hover:visible w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8">
        <Play />
      </button>
    </a>
  );
};
