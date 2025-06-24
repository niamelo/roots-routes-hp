import Image from "next/image";

export default function AboutMissionVision() {
  return (
    <div className="bg-white flex flex-col items-center gap-8 py-10 px-3">
      {/* Visionラベル */}
      <div className="relative w-full flex flex-col items-center justify-center mb-4">
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[clamp(250px,75vw,500px)] h-[clamp(40px,7vw,80px)]"
          style={{ background: "linear-gradient(to right, transparent 0%, #F2A527 15%, #F2A527 85%, transparent 100%)" }}
        />
        <span className="relative z-10 text-white font-bold text-[clamp(10px,6vw,55px)] tracking-wide">Vision</span>
      </div>
      <div className="text-center text-[#F2A527] text-[clamp(10px,6vw,55px)] font-bold mb-2">挑戦を習慣に、才能を解放し未来を無限に</div>
      {/* Missionラベル */}
      <div className="relative w-full flex flex-col items-center mb-4 mt-4">
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[clamp(250px,75vw,500px)] h-[clamp(40px,7vw,80px)]"
          style={{ background: "linear-gradient(to right, transparent 0%, #F2A527 15%, #F2A527 85%, transparent 100%)" }}
        />
        <span className="relative z-10 text-white font-bold text-[clamp(10px,6vw,55px)] tracking-wide">Mission</span>
      </div>
      <div className="text-center text-gray-700 text-base text-[clamp(16px,4.3vw,20px)] mb-5">Roots&Routesは、最先端のデジタルマーケティング手法と人材育成プログラムを通じて、企業と個人の未来への成長を支援します。<br></br><br></br>データ分析、AI活用、クリエイティブ戦略を組み合わせた総合的なアプローチで、マーケティング課題における革新を実現します。</div>
      {/* Missionの3要素（アイコン左・テキスト右） */}
      <div className="flex flex-col md:flex-row justify-center gap-8 w-full mt-2">
        {/* データ活用 */}
        <div className="flex-1 flex gap-4 px-2">
          <Image src="/Mission1.png" alt="データ活用" width={64} height={64} className="w-16 h-16 object-contain" />
          <div className="flex flex-col text-left justify-center">
            <div className="font-bold text-[#545454] text-[clamp(16px,4.3vw,20px)] mb-1">データ活用</div>
            <div className="text-[clamp(14px,4.3vw,20px)] text-gray-600">高度な分析とAIを駆使し、データから有益な洞察を導き出します</div>
          </div>
        </div>
        {/* 人材育成 */}
        <div className="flex-1 flex gap-4 px-2">
          <Image src="/Mission2.png" alt="人材育成" width={64} height={64} className="w-16 h-16 object-contain" />
          <div className="flex flex-col text-left justify-center">
            <div className="font-bold text-[#545454] text-[clamp(16px,4.3vw,20px)] mb-1">人材育成</div>
            <div className="text-[clamp(14px,4.3vw,20px)] text-gray-600">次世代のデジタルマーケターを育てるための包括的な教育プログラムを提供</div>
          </div>
        </div>
        {/* 成果志向 */}
        <div className="flex-1 flex gap-4 px-2">
          <Image src="/Mission3.png" alt="成果志向" width={64} height={64} className="w-16 h-16 object-contain" />
          <div className="flex flex-col text-left justify-center">
            <div className="font-bold text-[#545454] text-[clamp(16px,4.3vw,20px)] mb-1">成果志向</div>
            <div className="text-[clamp(14px,4.3vw,20px)] text-gray-600">measurable ROIとビジネス成長に焦点を当てた実践的なアプローチ</div>
          </div>
        </div>
      </div>
    </div>
  );
} 