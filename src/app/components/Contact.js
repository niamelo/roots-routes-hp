export default function Contact() {
  return (
    <section className="py-16 px-4 bg-gray-50" id="contact">
      <h2 className="text-3xl font-bold mb-8">お問い合わせ</h2>
      <form className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-8 rounded shadow">
        <div>
          <label className="block mb-2 font-semibold">お名前</label>
          <input type="text" className="w-full border rounded px-3 py-2 mb-4" placeholder="お名前" />
          <label className="block mb-2 font-semibold">メールアドレス</label>
          <input type="email" className="w-full border rounded px-3 py-2 mb-4" placeholder="email@example.com" />
          <label className="block mb-2 font-semibold">会社名</label>
          <input type="text" className="w-full border rounded px-3 py-2 mb-4" placeholder="会社名" />
          <label className="block mb-2 font-semibold">件名</label>
          <input type="text" className="w-full border rounded px-3 py-2 mb-4" placeholder="フリーテキスト" />
        </div>
        <div className="flex flex-col">
          <label className="block mb-2 font-semibold">メッセージ</label>
          <textarea className="w-full border rounded px-3 py-2 h-40 mb-4" placeholder="お問い合わせ内容をご記入ください" />
          <button type="submit" className="w-full py-3 bg-gradient-to-r from-orange-400 to-yellow-400 text-white rounded-full font-semibold">送信する</button>
        </div>
      </form>
    </section>
  );
} 