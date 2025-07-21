import { Link } from 'react-router-dom'; // 라우터 사용 시
// import logo from '@/assets/logo.png'; // 로컬 이미지라면 import 방식 사용

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'Gadgets', to: '/gadgets' },
  { label: 'Skills', to: '#tools', isAnchor: true },
];

export default function Header() {
  const handleToggleTheme = () => {
    document.documentElement.classList.toggle('dark');
  };

  return (
    <header>
      <nav className="flex items-center justify-between p-4 bg-gray-800 text-white">
        <img src="https://picsum.photos/100/50" alt="로고" className="h-10" />
        
        <ul className="flex gap-3 items-center">
          <li className="text-sm text-gray-400">리팩토링 중...</li>
          {navItems.map(({ label, to, isAnchor }) => (
            <li key={label}>
              {isAnchor ? (
                <a href={to} className="bg-indigo-500 text-white px-4 py-2 rounded hover:text-blue-300">
                  {label}
                </a>
              ) : (
                <Link to={to} className="bg-indigo-500 text-white px-4 py-2 rounded hover:text-blue-300">
                  {label}
                </Link>
              )}
            </li>
          ))}
          <li>
            <button
              onClick={handleToggleTheme}
              className="text-xl hover:text-yellow-300 transition"
              aria-label="테마 토글"
            >
              🌗
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
