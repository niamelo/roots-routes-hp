'use client';
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      // 例: 400px以上スクロールしたら非表示
      setHide(window.scrollY > 400);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${hide ? "opacity-0 pointer-events-none" : "opacity-100"}`}>
      <div className="mx-auto flex items-center justify-between px-4 md:px-12 py-4">
        {/* ロゴ */}
        <div className="flex items-center">
          <Image src="/logo.png" alt="ROOTS&ROUTES" width={120} height={40} className="object-contain w-[120px] h-[40px]" />
        </div>
        {/* PC: ナビゲーション */}
        <nav className="hidden md:flex justify-end gap-8 flex-1">
          <a href="#about" className="text-gray-700 hover:underline">About</a>
          <a href="#service" className="text-gray-700 hover:underline">Service</a>
          <a href="#skills" className="text-gray-700 hover:underline">Skills</a>
          <a href="#team" className="text-gray-700 hover:underline">Team</a>
        </nav>
        {/* PC: お問い合わせボタン */}
        <a href="#contact" className="hidden md:inline-block ml-4 px-6 py-3 bg-gradient-to-r from-[#FF5E31] to-[#F2A527] text-white font-semibold rounded-none shadow hover:opacity-90 transition-all">お問い合わせ <span className="ml-2">→</span></a>
        {/* SP: ハンバーガー */}
        <div className="md:hidden flex items-center">
          <button
            className="w-12 h-12 flex items-center justify-center bg-gradient-to-r from-[#FF5E31] to-[#F2A527] rounded-none shadow focus:outline-none"
            onClick={() => setOpen(!open)}
            aria-label="メニューを開く"
          >
            <span className="block w-6 h-0.5 bg-white mb-1"></span>
            <span className="block w-6 h-0.5 bg-white mb-1"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
          </button>
        </div>
      </div>
      {/* SP: メニュー展開 */}
      {open && (
        <div className="fixed inset-0 bg-black/40 z-40" onClick={() => setOpen(false)}>
          <nav
            className="absolute top-0 right-0 w-2/3 max-w-xs h-full bg-white shadow-lg flex flex-col p-8 gap-6 z-50"
            onClick={e => e.stopPropagation()}
          >
            <a href="#about" className="text-gray-700 hover:underline" onClick={() => setOpen(false)}>About</a>
            <a href="#service" className="text-gray-700 hover:underline" onClick={() => setOpen(false)}>Service</a>
            <a href="#skills" className="text-gray-700 hover:underline" onClick={() => setOpen(false)}>Skills</a>
            <a href="#team" className="text-gray-700 hover:underline" onClick={() => setOpen(false)}>Team</a>
            <a href="#contact" className="w-full text-center bg-gradient-to-r from-[#FF5E31] to-[#F2A527] text-white font-semibold rounded-none shadow hover:opacity-90 transition-all mt-0 mr-0" onClick={() => setOpen(false)}>
              お問い合わせ <span className="ml-2">→</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
} 
{/*FV過ぎたら透明にする機能も入れたい*/}