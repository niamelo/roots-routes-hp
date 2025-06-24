export default function Footer() {
  return (
    <footer className="bg-white py-8 px-4 border-t mt-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-2 mb-4 md:mb-0">
          <span className="font-bold text-xl">ROOTS&ROUTES</span>
          <span className="ml-2">© 2025 Roots&Routes. All rights reserved.</span>
        </div>
        <div className="flex flex-col md:flex-row gap-4 items-center">
          <div className="text-sm text-gray-600">
            株式会社Roots&Routes<br />
            〒106-6116 東京都港区六本木6-10-1 六本木ヒルズ森タワー16F
          </div>
          <nav className="flex gap-4 text-sm">
            <a href="#" className="hover:underline">TOP</a>
            <a href="#service" className="hover:underline">Service</a>
            <a href="#about" className="hover:underline">Company</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </nav>
        </div>
      </div>
    </footer>
  );
} 