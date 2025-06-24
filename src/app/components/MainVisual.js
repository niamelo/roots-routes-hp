import Image from "next/image";

export default function MainVisual() {
  return (
    <section className="w-full relative flex h-[400px] md:h-[520px] lg:h-[600px] overflow-hidden pb-9" id="mainvisual">
      {/* 背景画像 */}
      <Image src="/fv.png" alt="ファーストビュー画像" fill priority className="object-cover w-full h-full absolute top-0 left-0 z-0" />
      {/* オーバーレイ */}
      <div className="absolute inset-0 z-10" />
      {/* テキスト＋黒帯（右端グラデーション） */}
      <div className="relative z-20 w-full flex flex-col">
        <h1 className="text-[clamp(35px,8vw,45px)] font-bold text-white drop-shadow-lg absolute bottom-[15%] left-0 w-full px-6 md:px-12 z-20">
          <span className="relative inline-block w-fit mb-1">
            <span className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/70 to-black/0 to-[90%] -z-10 rounded" />
            <span className="relative px-2">才能を解放する、</span>
          </span>
          <br />
          <span className="relative inline-block w-fit">
            <span className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/70 to-black/0 to-[90%] -z-10 rounded" />
            <span className="text-[clamp(30px,7vw,40px)] bg-gradient-to-r from-[#FF5E31] to-[#F2A527] text-transparent bg-clip-text font-bold relative px-2">挑戦を加速する</span>
          </span>
        </h1>
      </div>
    </section>
  );
} 