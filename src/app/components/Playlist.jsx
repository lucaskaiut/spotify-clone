import Image from "next/image";

export const Playlist = () => {
  return (
    <a
      href="#"
      className="bg-white/5 p-3 rounded hover:bg-white/10 flex flex-col gap-2"
    >
      <Image
        className="w-full"
        src="/cover.jpg"
        width={104}
        height={104}
        alt="Capa do album do slipknot"
      />
      <strong className="font-semibold">Daily Mix 1</strong>
      <span className="text-sm text-zinc-500">
        Slipknot, AC/DC, Iron Maiden
      </span>
    </a>
  );
};
