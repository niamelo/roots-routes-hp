export default function Service() {
  return (
    <section className="py-16 px-4 bg-gray-50" id="service">
      <h2 className="text-3xl font-bold mb-8">サービス</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-6 bg-white rounded shadow">
          <h3 className="text-xl font-semibold mb-2">SNSマーケティング</h3>
          <p>SNS運用代行・コンサルティング・インフルエンサーマーケティング</p>
        </div>
        <div className="p-6 bg-white rounded shadow">
          <h3 className="text-xl font-semibold mb-2">キャリアスイッチ</h3>
          <p>採用支援・人材紹介・キャリアアドバイザー</p>
        </div>
        <div className="p-6 bg-white rounded shadow">
          <h3 className="text-xl font-semibold mb-2">WEBマーケティング</h3>
          <p>WEB広告・SEO・コンテンツマーケティング</p>
        </div>
        <div className="p-6 bg-white rounded shadow">
          <h3 className="text-xl font-semibold mb-2">BPO</h3>
          <p>コールセンター・バックオフィス業務の効率化・コスト削減</p>
        </div>
      </div>
    </section>
  );
} 