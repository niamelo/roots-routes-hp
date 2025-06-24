import Image from "next/image";

export default function Contact() {
  return (
    <section className="py-16 px-2 md:px-8 bg-gradient-to-br from-[#FFE9D2] to-[#FDF6F0]" id="contact">
      {/* タイトルエリア */}
      <div className="flex items-center gap-6 mb-12 mt-5 px-3 w-full max-w-6xl mx-auto">
        <h2 className="text-[clamp(28px,7vw,48px)] font-bold text-[#545454] whitespace-nowrap">お問い合わせ</h2>
        <div className="flex-1 flex items-center">
          <Image src="/CONTACT.png" alt="CONTACT" width={420} height={120} className="object-contain w-[clamp(180px,40vw,480px)] h-auto ml-2" />
        </div>
      </div>
      {/* フォーム */}
      <form className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* 左カラム */}
        <div className="flex flex-col gap-6">
          <div>
            <label className="block mb-2 text-[clamp(15px,3vw,20px)] font-semibold text-[#545454]">お名前</label>
            <input type="text" className="w-full bg-white border-0 border-b-2 border-[#F2A527] focus:ring-0 focus:border-[#FF5E31] px-2 py-2 text-[clamp(15px,3vw,18px)] text-black" placeholder="お名前" />
          </div>
          <div>
            <label className="block mb-2 text-[clamp(15px,3vw,20px)] font-semibold text-[#545454]">メールアドレス</label>
            <input type="email" className="w-full bg-white border-0 border-b-2 border-[#F2A527] focus:ring-0 focus:border-[#FF5E31] px-2 py-2 text-[clamp(15px,3vw,18px)] text-black" placeholder="email@example.com" />
          </div>
          <div>
            <label className="block mb-2 text-[clamp(15px,3vw,20px)] font-semibold text-[#545454]">会社名</label>
            <input type="text" className="w-full bg-white border-0 border-b-2 border-[#F2A527] focus:ring-0 focus:border-[#FF5E31] px-2 py-2 text-[clamp(15px,3vw,18px)] text-black" placeholder="会社名" />
          </div>
          <div>
            <label className="block mb-2 text-[clamp(15px,3vw,20px)] font-semibold text-[#545454]">件名</label>
            <input type="text" className="w-full bg-white border-0 border-b-2 border-[#F2A527] focus:ring-0 focus:border-[#FF5E31] px-2 py-2 text-[clamp(15px,3vw,18px)] text-black" placeholder="フリーテキスト" />
          </div>
        </div>
        {/* 右カラム */}
        <div className="flex flex-col gap-6 justify-between h-full">
          <div>
            <label className="block mb-2 text-[clamp(15px,3vw,20px)] font-semibold text-[#545454]">メッセージ</label>
            <textarea className="w-full bg-white border-0 border-b-2 border-[#F2A527] focus:ring-0 focus:border-[#FF5E31] px-2 py-2 text-[clamp(15px,3vw,18px)] min-h-[120px] text-black" placeholder="お問い合わせ内容をご記入ください" />
          </div>
          <button type="submit" className="w-full mt-6 py-3 bg-gradient-to-r from-[#FF5E31] to-[#F2A527] text-white rounded-full font-bold text-[clamp(16px,3vw,22px)] flex items-center justify-center gap-3">
            送信する
            <span className="w-6 h-6 bg-white rounded-full flex items-center justify-center ml-2">
              <Image src="/scroll_right.png" alt="送信" width={20} height={20} />
            </span>
          </button>
        </div>
      </form>
    </section>
  );
} 