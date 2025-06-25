import Image from "next/image";

const services = [
  {
    title: "SNSマーケティング",
    image: "/career.png",
    gradient: "linear-gradient(to right, #F2A527 0%, #F2A527 85%, transparent 100%)",
    description: (
      <>
        SNSデータ分析から企画・運用までワンストップで支援し、ブランド成長のサポート<br />
        <ul className="list-disc pl-5 mt-1">
          <li>SNS運用代行</li>
          <li>SNSコンサルティング</li>
          <li>インフルエンサーマーケティング</li>
        </ul>
      </>
    ),
  },
  {
    title: "キャリアスイッチ",
    image: "/sns.png",
    gradient: "linear-gradient(to right, #F2A527 0%, #F2A527 85%, transparent 100%)",
    description: (
      <>
        働く社員のリアルな一日に密着する
        <a href="#" className="text-[#F2A527] underline ml-1" target="_blank" rel="noopener noreferrer">YouTube番組<span className="align-super text-xs ml-0.5">↗</span></a><br />
        <ul className="list-disc pl-5 mt-1">
          <li>採用支援</li>
          <li>人材紹介</li>
          <li>キャリアアドバイザー</li>
        </ul>
      </>
    ),
  },
  {
    title: "WEBマーケティング",
    image: "/web.png",
    gradient: "linear-gradient(to right, #F2A527 0%, #F2A527 85%, transparent 100%)",
    description: (
      <>
        SEO・サイト解析・広告運用を一気通貫し、顧客体験をシームレスに最適化<br />
        <ul className="list-disc pl-5 mt-1">
          <li>WEB広告</li>
          <li>SEO</li>
          <li>コンテンツマーケティング</li>
        </ul>
      </>
    ),
  },
  {
    title: "BPO",
    image: "/bpo.png",
    gradient: "linear-gradient(to right, #F2A527 0%, #F2A527 85%, transparent 100%)",
    description: (
      <>
        コールセンター業務やバックオフィス業務を中心に、お客様の業務効率化やコスト削減を実現
      </>
    ),
  },
];

export default function Service() {
  return (
    <section className="py-12 px-2 md:px-6 bg-[#EFF5E7]" id="service">
      {/* タイトルエリア */}
      <div className="relative flex justify-center items-center w-full mb-10 mt-5 px-3 h-[clamp(40px,11vw,250px)]">
        {/* 背景画像 */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0 select-none pointer-events-none flex items-center justify-center h-full">
          <Image src="/SERVICE.png" alt="SERVICE" width={500} height={140} style={{ width: 'clamp(330px,85vw,900px)', height: 'auto', display: 'block' }} />
        </div>
        {/* タイトルテキスト */}
        <h2 className="text-[clamp(10px,6vw,70px)] font-bold z-10 flex items-center justify-center h-full" style={{ color: '#545454' }}>サービス</h2>
      </div>
      {/* サービスカード */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 w-full max-w-6xl mx-auto place-items-center items-stretch">
        {services.map((service, idx) => (
          <div
            key={service.title}
            className="flex flex-row md:flex-row bg-white rounded-lg shadow p-6 md:p-7 w-full h-full md:w-full md:h-full items-start"
            style={{ maxWidth: 500 }}
          >
            {/* 左：テキスト */}
            <div className="flex-1 flex flex-col justify-start items-start">
              <div className="relative flex items-center h-10 mb-3">
                <div className="absolute left-0 top-0 w-full h-full rounded" style={{ background: service.gradient }} />
                <span className="relative z-10 text-white text-[clamp(15px,3vw,20px)] md:text-xl font-bold px-5 tracking-wide service-title-small">{service.title}</span>
              </div>
              <div className="text-[#545454] text-[clamp(14px,3vw,20px)] leading-relaxed">{service.description}</div>
            </div>
            {/* 右：イラスト */}
            <div className="flex items-center justify-center ml-4 min-w-[80px] w-[80px] h-[80px] overflow-hidden md:ml-6 md:min-w-[110px] md:w-[110px] md:h-[110px] self-center">
              <Image src={service.image} alt={service.title} width={80} height={80} className="object-contain w-[80px] h-[80px] md:w-[110px] md:h-[110px]" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 