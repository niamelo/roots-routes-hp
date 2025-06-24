export default function Skills() {
  return (
    <section className="py-16 px-4 bg-white" id="skills">
      <h2 className="text-3xl font-bold mb-8">デジタルスキル</h2>
      <div className="flex space-x-4 overflow-x-auto pb-4">
        <div className="min-w-[180px] p-4 bg-gray-100 rounded shadow text-center">Instagram運用</div>
        <div className="min-w-[180px] p-4 bg-gray-100 rounded shadow text-center">TikTok運用</div>
        <div className="min-w-[180px] p-4 bg-gray-100 rounded shadow text-center">AI活用</div>
        <div className="min-w-[180px] p-4 bg-gray-100 rounded shadow text-center">動画編集</div>
        <div className="min-w-[180px] p-4 bg-gray-100 rounded shadow text-center">マーケティング戦略</div>
      </div>
    </section>
  );
} 