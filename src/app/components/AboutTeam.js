import Image from "next/image";

export default function AboutTeam() {
  return (
    <div className="flex flex-col md:flex-row items-center bg-white p-4 mt-2">
      <div className="w-full md:w-1/2 flex justify-center mb-4 md:mb-0">
        <Image src="/team.png" alt="チーム写真" width={699} height={388} className="object-cover grayscale" />
      </div>
      <div className="flex-1 flex flex-col justify-center px-3">
        <div className="text-[clamp(20px,6vw,35px)] text-[#F2A527] mb-2">チーム一体となって成長</div>
        <div className="mb-4 text-[clamp(16px,4.3vw,20px)] leading-relaxed text-[#545454]">
          経験豊富なメンターから新しいスキルを学ぶメンバーまで、全員が一緒になって学習し、成長していく環境を大切にしています。
        </div>
      </div>
    </div>
  );
} 