import Image from "next/image";

export default function MainVisual() {
  return (
    <section className="w-full relative flex h-[400px] md:h-[700px] lg:h-[800px] overflow-hidden mv-auto-height" id="mainvisual">
      {/* 背景画像 */}
      <Image src="/fv.png" alt="ファーストビュー画像" fill priority className="object-cover w-full h-full absolute top-0 left-0 z-0" />
      {/* オーバーレイ */}
      <div className="absolute inset-0 z-10" />
      {/* テキスト＋黒帯（右端グラデーション） */}
      <div className="relative z-20 w-full flex flex-col">
        <h1 className="text-[clamp(35px,8vw,80px)] font-bold text-white drop-shadow-lg absolute bottom-[15%] left-0 w-full md:px-12 z-20">
          <span className="relative inline-block w-fit mb-1">
            <span className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/70 to-black/0 to-[90%] -z-10 rounded" />
            <span className="relative px-2">才能を解放する、</span>
          </span>
          <br />
          <span className="relative inline-block w-fit">
            <span className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/70 to-black/0 to-[90%] -z-10 rounded" />
            <span className="text-[clamp(30px,7vw,70px)] bg-gradient-to-r from-[#FF5E31] to-[#F2A527] text-transparent bg-clip-text font-bold relative px-2">挑戦を加速する</span>
          </span>
        </h1>
      </div>
      {/* 右下サムネイル画像（スマホ時は下部全幅） */}
      <div
        className="absolute z-30 flex w-full left-0 bottom-0 md:w-auto md:right-6 md:bottom-6 md:left-auto mv-thumb-below"
      >
        <Image
          src="/fv_sub3.png"
          alt="サブ画像3"
          width={229}
          height={124}
          className="object-cover w-[clamp(110px,32vw,229px)] h-[clamp(50px,16vw,124px)] mv-thumb-img"
        />
        <Image
          src="/fv_sub2.png"
          alt="サブ画像2"
          width={227}
          height={124}
          className="object-cover w-[clamp(110px,32vw,227px)] h-[clamp(50px,16vw,124px)] mv-thumb-img"
        />
        <Image
          src="/fv_sub1.png"
          alt="サブ画像1"
          width={129}
          height={124}
          className="object-cover w-[clamp(110px,32vw,220px)] h-[clamp(50px,16vw,124px)] mv-thumb-img"
        />
      </div>
    </section>
  );
} 