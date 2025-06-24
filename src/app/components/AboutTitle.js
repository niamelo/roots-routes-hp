import Image from "next/image";

export default function AboutTitle() {
  return (
    <div className="relative flex justify-center items-center w-full mb-10 mt-5 px-3 h-[clamp(40px,11vw,250px)]">
      {/* 背景画像 */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0 select-none pointer-events-none flex items-center justify-center h-full">
        <Image src="/aboutTitle.png" alt="ABOUT" width={500} height={140} style={{ width: 'clamp(330px,85vw,900px)', height: 'auto', display: 'block' }} />
      </div>
      {/* タイトルテキスト */}
      <h2 className="text-[clamp(10px,6vw,70px)] font-bold z-10 flex items-center justify-center h-full" style={{ color: '#545454' }}>Roots&Routesについて</h2>
    </div>
  );
} 