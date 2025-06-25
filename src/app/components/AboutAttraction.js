import Image from "next/image";

export default function AboutAttraction() {
  return (
    <div className="w-full bg-white py-6 mt-2 px-1 md:px-4">
      {/* 上段：タイトル＋説明 */}
      <div className="flex flex-col md:flex-row items-center gap-4 mb-6">
        {/* タイトル＋ラベル */}
        <div className="relative flex-shrink-0 h-12 min-w-[260px] flex items-center">
          <div
            className="absolute left-0 top-0 w-[clamp(220px,50vw,450px)] h-full"
            style={{ background: "linear-gradient(to right, #F2A527 0%, #F2A527 85%, transparent 100%)" }}
          />
          <span className="relative z-10 text-white text-[clamp(15px,5vw,30px)] tracking-wide px-3 text-left md:text-center">
            現代的な学習環境
          </span>
        </div>
        {/* 説明テキスト */}
        <div className="flex-1 text-[#545454] text-[clamp(10px,3vw,18px)] leading-tight text-left md:text-end md:pl-4 pt-2 md:pt-0 z-10">
          明るく開放的なオフィス空間で、多様なバックグラウンドを持つチームメンバーが集まり、知識とアイデアを共有しています。
        </div>
      </div>
      {/* 下段：アイコン＋テキスト4つ */}
      <div className="flex flex-col md:flex-row gap-4 md:gap-6 w-full">
        {/* 1 */}
        <div className="flex-1 flex items-center bg-white rounded-lg">
          <Image src="/Appeal1.png" alt="多様性を重視" width={80} height={80} className="w-12 h-12 object-contain mr-3" />
          <div>
            <div className="font-bold text-[#545454] text-[clamp(16px,4.3vw,20px)]">多様性を重視</div>
            <div className="text-[clamp(12.5px,4.3vw,20px)] text-[#545454]">様々な経歴と専門性を持つメンバーが協働</div>
          </div>
        </div>
        {/* 2 */}
        <div className="flex-1 flex items-center bg-white rounded-lg">
          <Image src="/Appeal2.png" alt="オープンコミュニケーション" width={80} height={80} className="w-12 h-12 object-contain mr-3" />
          <div>
            <div className="font-bold text-[#545454] text-[clamp(16px,4.3vw,20px)]">オープンコミュニケーション</div>
            <div className="text-[clamp(12.5px,4.3vw,20px)] text-[#545454]">自由に意見交換できる環境を提供</div>
          </div>
        </div>
        {/* 3 */}
        <div className="flex-1 flex items-center bg-white rounded-lg">
          <Image src="/Appeal3.png" alt="創造的な空間" width={80} height={80} className="w-12 h-12 object-contain mr-3" />
          <div>
            <div className="font-bold text-[#545454] text-[clamp(16px,4.3vw,20px)]">創造的な空間</div>
            <div className="text-[clamp(12.5px,4.3vw,20px)] text-[#545454]">イノベーションを促進するデザイン</div>
          </div>
        </div>
        {/* 4 */}
        <div className="flex-1 flex items-center bg-white rounded-lg">
          <Image src="/Appeal4.png" alt="継続学習" width={80} height={80} className="w-12 h-12 object-contain mr-3" />
          <div>
            <div className="font-bold text-[#545454] text-[clamp(16px,4.3vw,20px)]">継続学習</div>
            <div className="text-[clamp(12.5px,4.3vw,20px)] text-[#545454]">常に学び成長できる環境</div>
          </div>
        </div>
      </div>
    </div>
  );
}
