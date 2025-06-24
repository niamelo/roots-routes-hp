import Image from "next/image";

const voices = [
  {
    id: 12,
    name: "古橋 杏々",
    year: "2025年中途入社",
    thumb: "/thumb1.jpg",
    interview: "“退屈”が嫌い。 “変化”が好き。だから私はここにいる",
    title: "退屈が嫌い。変化が好き。だから私はここにいる",
    cta: "詳しく見る >",
  },
  {
    id: 11,
    name: "宮腰 櫻桜",
    year: "2024年中途入社",
    thumb: "/thumb2.webp",
    interview: "“素直に学ぶ”を武器に変えて、一歩ずつ前へ進む。",
    title: "素直に学ぶを武器に変えて、一歩ずつ前ね進む。",
    cta: "詳しく見る >",
  },
  {
    id: 10,
    name: "金子 優太",
    year: "2024年中途入社",
    thumb: "/thumb3.jpg",
    interview: "挑戦が成長が未来を切り拓く。本気で突っ走る毎日を楽しむ。",
    title: "挑戦が成長が未来を切り拓く。本気で突っ走る毎日を楽しむ。",
    cta: "詳しく見る >",
  },
];

export default function Voice() {
  return (
    <section className="py-16 px-4 bg-white" id="voice">
      {/* タイトルエリア */}
      <div className="relative flex justify-center items-center w-full mb-10 mt-5 px-3 h-[clamp(40px,11vw,250px)]">
        {/* 背景画像 */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0 select-none pointer-events-none flex items-center justify-center h-full">
          <Image src="/Voice.png" alt="VOICE" width={500} height={140} style={{ width: 'clamp(330px,80vw,600px)', height: 'auto', display: 'block' }} />
        </div>
        {/* タイトルテキスト */}
        <h2 className="text-[clamp(10px,6vw,70px)] font-bold z-10 flex items-center justify-center h-full" style={{ color: '#545454' }}>受講者の声</h2>
      </div>
      {/* ボイスカード */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10 max-w-6xl mx-auto">
        {voices.map((voice) => (
          <div key={voice.id} className="flex flex-col items-center">
            {/* サムネイル（CTA） */}
            <a href="#" className="block w-full rounded-xl overflow-hidden shadow-lg mb-3 group relative">
              <Image src={voice.thumb} alt={voice.name} width={370} height={180} className="w-full h-[180px] object-cover" />
              {/* オーバーレイ */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF5E31] to-[#F2A527] opacity-90 group-hover:opacity-95 transition-opacity duration-200" />
              {/* テキストオーバーレイ */}
              <div className="absolute inset-0 flex flex-col justify-between p-4 text-white">
                <div>
                  <div className="text-xs font-semibold mb-1">NEXT Home</div>
                  <div className="text-2xl font-bold mb-2">INTERVIEW</div>
                  <div className="inline-block bg-white/80 text-[#FF5E31] text-xs font-bold rounded px-2 py-0.5 mb-2">{voice.year}</div>
                  <div className="text-base font-bold mb-1">{voice.name}</div>
                  <div className="text-xs leading-tight mb-2">{voice.interview}</div>
                </div>
                <div className="flex justify-end items-end">
                  <div className="bg-white text-[#222] font-bold text-lg rounded-full px-4 py-1 shadow">#{voice.id}</div>
                </div>
              </div>
            </a>
            {/* タイトル・CTA */}
            <div className="w-full text-[clamp(14px,3vw,18px)] font-bold text-[#222] mb-2 mt-1">{voice.title}</div>
            <a href="#" className="text-[#F2A527] text-sm font-bold hover:underline">{voice.cta}</a>
          </div>
        ))}
      </div>
      {/* View More ボタン */}
      <div className="flex justify-center">
        <button className="flex items-center justify-center gap-3 px-8 py-3 border border-[#F2A527] text-[#F2A527] rounded-full font-semibold bg-white hover:bg-orange-50 text-lg min-w-[260px]">
          View More
          <span className="w-4 h-4 rounded-full bg-gradient-to-r from-[#FFB95E] to-[#F2A527] inline-block" />
        </button>
      </div>
    </section>
  );
} 