import Image from "next/image";

export default function AboutRepresentative() {
  return (
    <div className="h-full flex flex-col md:flex-row items-start text-white mt-6">
        <Image src="/representative.png" alt="代表写真" width={450} height={480} className="h-full object-cover w-full md:w-1/3 flex justify-start md:mb-0" />
      <div className="flex-1 flex flex-col justify-center px-5">
        <div className="text-[clamp(20px,5vw,30px)] font-bold text-[#F2A527] mb-2 px-5">メッセージ</div>
        <div className="relative mb-1 text-base leading-relaxed text-[clamp(12.5px,4.3vw,20px)] text-[#545454]">
        <p>― 挑戦を習慣に、才能を解放し未来を無限に ―</p>
        <br></br>
        <p>求められる能力が加速度的に変わる今、私たちは“挑戦”を日常へと引き寄せ、一人ひとりの才能を解き放ちたいと考えております。</p><br></br>
        <p>社名であるRoots＆Routesは、Roots（自分の根）を深く知り、Routes（多様な道）を自由に選べる世界をつくるという意味を込め、「まだ見ぬ自己実現」を求めるすべての人に挑戦の舞台を設け、学びと伴走支援を惜しまず、皆さんが思い描く理想への最短ルートを提案するパートナーであり続けます。</p>
        <br></br>
        <p>私たちが大切にする 3 つの価値観</p>
        <p>挑戦常態化 ：失敗を恐れず、まず動く。経験こそが最大の資産。</p>
        <p>才能共鳴：多様な強みを掛け合わせ、互いの可能性を最大化する。</p>
        <p>無限進化：絶え間なく学び、テクノロジーと共に進化し続ける。</p>
        <br></br>
        <p>挑戦が習慣になったとき、未来は無限に拓ける。</p>
        <p>Roots＆Routes は、あなたとともに“まだ見ぬ自己実現”への航路を歩み続けます。</p>
        </div>
        <div className="flex justify-end items-center mt-4">
          <span className="text-[#F2A527] mr-2 text-[16px]">代表取締役CEO</span>
          <span className="text-[#545454] text-[24px]">佐藤 健太</span>
        </div>
      </div>
    </div>
  );
} 