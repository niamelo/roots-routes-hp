export default function Team() {
  return (
    <section className="py-16 px-4 bg-gray-50" id="team">
      <h2 className="text-3xl font-bold mb-8">チーム</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        <div className="bg-white p-4 rounded shadow text-center">
          <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-2" />
          <div className="font-semibold">岸 貴大</div>
          <div className="text-sm text-orange-500">代表取締役</div>
        </div>
        <div className="bg-white p-4 rounded shadow text-center">
          <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-2" />
          <div className="font-semibold">一寸木 美岬</div>
          <div className="text-sm text-gray-500">メンバー</div>
        </div>
        <div className="bg-white p-4 rounded shadow text-center">
          <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-2" />
          <div className="font-semibold">永野 和希</div>
          <div className="text-sm text-gray-500">メンバー</div>
        </div>
        <div className="bg-white p-4 rounded shadow text-center">
          <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-2" />
          <div className="font-semibold">佳本 結花</div>
          <div className="text-sm text-gray-500">メンバー</div>
        </div>
      </div>
      <div className="flex justify-center">
        <a href="#contact" className="px-8 py-3 bg-gradient-to-r from-orange-400 to-yellow-400 text-white rounded-full font-semibold">メンバーに相談する</a>
      </div>
    </section>
  );
} 