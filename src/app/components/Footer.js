import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white pt-12 pb-4 px-4 border-t">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
        {/* 左：ロゴ・インスタ・会社情報 */}
        <div className="flex flex-col gap-4 min-w-[220px]">
          <div className="flex items-center gap-4 mb-2">
            <Image src="/logo.png" alt="ROOTS&ROUTES" width={120} height={40} className="object-contain w-[120px] h-[40px]" />
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
              <Image src="/instaCta.png" alt="Instagram" width={40} height={40} className="object-contain w-[40px] h-[40px]" />
            </a>
          </div>
          <div className="text-[15px] text-gray-700 font-medium">株式会社Roots＆Routes</div>
          <div className="text-[15px] text-gray-500 leading-relaxed mt-2">
            〒106-6116<br />
            東京都港区六本木6-10-1<br />
            六本木ヒルズ森タワー16F
          </div>
        </div>
        {/* 右：ナビゲーション4カラム */}
        <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
          <div>
            <div className="font-bold text-gray-700 mb-2">TOP</div>
          </div>
          <div>
            <div className="font-bold text-gray-700 mb-2">Service</div>
            <nav className="flex flex-col gap-1">
              <a href="#" className="text-[#F2A527] font-medium hover:underline">SNSマーケティング支援</a>
              <a href="#" className="text-[#F2A527] font-medium hover:underline">キャリアスイッチ</a>
              <a href="#" className="text-[#F2A527] font-medium hover:underline">人材紹介</a>
            </nav>
          </div>
          <div>
            <div className="font-bold text-gray-700 mb-2">Company</div>
            <nav className="flex flex-col gap-1">
              <a href="#" className="text-[#F2A527] font-medium hover:underline">会社概要</a>
              <a href="#" className="text-[#F2A527] font-medium hover:underline">代表メッセージ</a>
              <a href="#" className="text-[#F2A527] font-medium hover:underline">チーム</a>
            </nav>
          </div>
          <div>
            <div className="font-bold text-gray-700 mb-2">Contact</div>
          </div>
        </div>
      </div>
      {/* コピーライト */}
      <div className="max-w-7xl mx-auto flex justify-end mt-6">
        <span className="text-gray-400 text-sm">© 2025 Roots＆Routes. All rights reserved.</span>
      </div>
    </footer>
  );
} 