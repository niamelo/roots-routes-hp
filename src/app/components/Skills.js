"use client";
import Image from "next/image";
import { useRef } from "react";

const skills = [
  { name: "Instagram運用", image: "/insta.png" },
  { name: "TikTok運用", image: "/tikitok.png" },
  { name: "AI活用", image: "/ai.png" },
  { name: "動画編集", image: "/doga.png" },
  { name: "マーケティング戦略", image: "/marketing.png" },
];

export default function Skills() {
  const scrollRef = useRef(null);

  // 無限スクロール用: skills配列を2回繰り返して表示
  const infiniteSkills = [...skills, ...skills];

  // スクロールボタンの動作
  const handleScroll = (dir) => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.firstChild?.offsetWidth || 200;
    if (dir === "left") {
      el.scrollBy({ left: -cardWidth, behavior: "smooth" });
    } else {
      el.scrollBy({ left: cardWidth, behavior: "smooth" });
    }
    // 無限スクロールの端で巻き戻し
    setTimeout(() => {
      if (el.scrollLeft <= 0) {
        el.scrollLeft = el.scrollWidth / 2 - el.offsetWidth;
      } else if (el.scrollLeft + el.offsetWidth >= el.scrollWidth) {
        el.scrollLeft = el.scrollWidth / 2 - el.offsetWidth;
      }
    }, 400);
  };

  // 初期位置を真ん中に
  // useEffectは省略（必要なら追加）

  return (
    <section className="py-14 px-2 md:px-6 bg-white" id="skills">
      <div className="flex flex-col items-center w-full max-w-8xl mx-auto">
        {/* タイトル */}
        <h2 className="text-[clamp(22px,6vw,40px)] font-bold text-[#545454] text-center leading-tight">マーケティングの未来を創る</h2>
        <div className="text-[clamp(20px,5vw,36px)] font-bold text-[#F2A527] text-center mt-1 mb-3">デジタルスキル</div>
        {/* 説明文 */}
        <div className="text-[clamp(13px,3vw,18px)] text-gray-700 text-center mb-8 max-w-2xl">
          Roots&Routesは、未経験の方でも必要なスキルを習得できるように、<br className="hidden md:block" />次世代マーケター向け研修プログラムを提供します。
        </div>
        {/* スキルカード＋スクロールボタン */}
        <div className="flex flex-col items-center w-full">
          {/* スクロールエリア */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide px-12 py-2 w-full"
            style={{ scrollBehavior: "smooth" }}
          >
            {infiniteSkills.map((skill, idx) => (
              <div
                key={idx}
                className="w-[256px] h-[184px] bg-white rounded-xl shadow-md flex flex-col items-center p-3 transition-transform duration-200 hover:scale-105 flex-shrink-0"
              >
                <div className="w-[256px] h-[128px] flex items-center justify-center mb-2">
                  <Image src={skill.image} alt={skill.name} width={256} height={128} className="object-contain w-[256px] h-[128px]" />
                </div>
                <div className="text-[clamp(13px,3vw,18px)] font-semibold text-[#222] text-center whitespace-nowrap">{skill.name}</div>
              </div>
            ))}
          </div>
          {/* スクロールボタン（下中央） */}
          <div className="flex justify-center items-center gap-3 mt-2">
            <button
              className="bg-white rounded-full shadow p-1 w-9 h-9 flex items-center justify-center"
              onClick={() => handleScroll('left')}
              aria-label="左にスクロール"
              type="button"
            >
              <Image src="/scroll_left.png" alt="左" width={28} height={28} />
            </button>
            <button
              className="bg-white rounded-full shadow p-1 w-9 h-9 flex items-center justify-center"
              onClick={() => handleScroll('right')}
              aria-label="右にスクロール"
              type="button"
            >
              <Image src="/scroll_right.png" alt="右" width={28} height={28} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 