export default function Voice() {
  return (
    <section className="py-16 px-4 bg-white" id="voice">
      <h2 className="text-3xl font-bold mb-8">受講者の声</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <div className="bg-orange-100 p-4 rounded shadow">
          <div className="h-32 bg-orange-200 rounded mb-2 flex items-center justify-center">#12</div>
          <div className="font-semibold mb-1">古橋 杏々</div>
          <div className="text-sm mb-2">退屈が嫌い。変化が好き。だから私はここにいる</div>
          <a href="#" className="text-orange-500 hover:underline text-sm">詳しく見る &gt;</a>
        </div>
        <div className="bg-orange-100 p-4 rounded shadow">
          <div className="h-32 bg-orange-200 rounded mb-2 flex items-center justify-center">#11</div>
          <div className="font-semibold mb-1">宮腰 櫻桜</div>
          <div className="text-sm mb-2">素直に学ぶを武器に変えて、一歩ずつ前へ進む。</div>
          <a href="#" className="text-orange-500 hover:underline text-sm">詳しく見る &gt;</a>
        </div>
        <div className="bg-orange-100 p-4 rounded shadow">
          <div className="h-32 bg-orange-200 rounded mb-2 flex items-center justify-center">#10</div>
          <div className="font-semibold mb-1">金子 優太</div>
          <div className="text-sm mb-2">挑戦が成長が未来を切り拓く。本気で突っ走る毎日を楽しむ。</div>
          <a href="#" className="text-orange-500 hover:underline text-sm">詳しく見る &gt;</a>
        </div>
      </div>
      <div className="flex justify-center">
        <button className="px-8 py-3 border border-orange-400 text-orange-500 rounded-full font-semibold bg-white hover:bg-orange-50">View More</button>
      </div>
    </section>
  );
} 