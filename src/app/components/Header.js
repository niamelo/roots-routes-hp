export default function Header() {
  return (
    <header className="flex items-center justify-between px-8 py-4 bg-white shadow">
      <div className="font-bold text-2xl">ROOTS&ROUTES</div>
      <nav className="space-x-6">
        <a href="#about" className="hover:underline">About</a>
        <a href="#service" className="hover:underline">Service</a>
        <a href="#skills" className="hover:underline">Skills</a>
        <a href="#team" className="hover:underline">Team</a>
        <a href="#voice" className="hover:underline">Voice</a>
        <a href="#contact" className="hover:underline">Contact</a>
      </nav>
      <a href="#contact" className="ml-4 px-4 py-2 bg-gradient-to-r from-orange-400 to-yellow-400 text-white rounded-full font-semibold">お問い合わせ</a>
    </header>
  );
} 