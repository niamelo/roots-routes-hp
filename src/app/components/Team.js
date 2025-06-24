import Image from "next/image";

const members = [
  {
    name: "岸 貴大",
    role: "代表取締役",
    image: "/kishi.png", // 画像がなければ public/team.png などで仮置き
    bio: "投資銀行で国内外の資金調達・M&Aアドバイザリーに従事し、その後、複数スタートアップに参画し、経営戦略・資本政策・組織構築を統括"
  },
  {
    name: "一寸木 美岬",
    role: "追記",
    image: "/issungi.png",
    bio: "追記"
  },
  {
    name: "永野 和希",
    role: "追記",
    image: "/nagano.png",
    bio: "追記"
  },
  {
    name: "佳本 結花",
    role: "追記",
    image: "/sumimoto.png",
    bio: "追記"
  },
];

export default function Team() {
  return (
    <section className="py-14 px-2 md:px-6 bg-[#FFF6E7]" id="team">
      {/* タイトルエリア */}
      <div className="relative flex justify-center items-center w-full mb-20 mt-5 px-3 h-[clamp(40px,11vw,250px)]">
        {/* 背景画像 */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0 select-none pointer-events-none flex items-center justify-center h-full">
          <Image src="/TeamTitle.png" alt="TEAM" width={500} height={140} style={{ width: 'clamp(330px,80vw,600px)', height: 'auto', display: 'block' }} />
        </div>
        {/* タイトルテキスト */}
        <h2 className="text-[clamp(10px,6vw,70px)] font-bold z-10 flex items-center justify-center h-full" style={{ color: '#545454' }}>チーム</h2>
      </div>
      {/* メンバーカード */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-12 mt-20 w-full max-w-6xl mx-auto">
        {members.map((member, idx) => (
          <div key={member.name} className="relative bg-white rounded-t-lg rounded-b-lg shadow text-center flex flex-col items-center border-t-2 border-[#F2A527] pt-12 pb-8 px-4 min-h-[340px] w-[165px] max-w-[165px] h-[352px] max-h-[352px] md:w-[248px] md:max-w-[248px] md:h-[350px] md:max-h-[350px] mx-auto">
            {/* アイコン（半分だけ外に出す） */}
            <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-24 h-24 rounded-full overflow-hidden border-2 border-[#F2A527] bg-gray-100 flex items-center justify-center shadow">
              <Image src={member.image || '/team.png'} alt={member.name} width={80} height={80} className="object-cover w-24 h-24" />
            </div>
            {/* 以下、名前・役職・経歴 */}
            <div className="font-bold text-[clamp(18px,4vw,24px)] text-[#545454] mb-1 mt-12">{member.name}</div>
            {idx === 0 ? (
              <div className="text-[clamp(14px,3vw,16px)] text-[#F2A527] font-semibold mb-2">{member.role}</div>
            ) : null}
            {idx === 0 ? (
              <div className="text-[clamp(13px,2.5vw,15px)] text-[#545454] leading-relaxed mb-2">{member.bio}</div>
            ) : (
              <div className="text-[clamp(13px,2.5vw,15px)] text-gray-500 mt-6">追記</div>
            )}
          </div>
        ))}
      </div>
      {/* CTAエリア */}
      <div className="w-full max-w-4xl mx-auto mt-8">
        <div className="w-full flex flex-col md:flex-row items-center justify-between bg-gradient-to-r from-[#FF5E31] to-[#F2A527] rounded-lg p-6 md:p-8">
          <div className="text-white text-[clamp(16px,4vw,28px)] font-bold text-center md:text-left mb-4 md:mb-0">
            私たちと一緒に、<br className="hidden md:block" />新しい挑戦の一歩を踏み出しませんか？
          </div>
          <a href="#contact" className="flex items-center bg-white rounded-lg px-8 py-3 min-w-[220px] justify-center shadow-none">
            <span className="text-[clamp(15px,3vw,22px)] font-bold text-[#F2A527] mr-4">メンバーに相談する</span>
            <span className="w-5 h-5 rounded-full bg-gradient-to-r from-[#FFB95E] to-[#F2A527] inline-block" />
          </a>
        </div>
      </div>
    </section>
  );
} 