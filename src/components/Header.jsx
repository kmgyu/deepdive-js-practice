export default function Header() {
    return (
    <header>
      <nav class="flex items-center justify-between p-4 bg-gray-800 text-white">
        <img src="https://picsum.photos/100/50" alt="로고" />
        <ul class="flex gap-4">
          <li><a href="index.html" class="bg-indigo-500 text-white px-4 py-2 rounded hover:text-blue-400">Home</a></li>
          <li>
            <a href="portfolio.html" class="bg-indigo-500 text-white px-4 py-2 rounded hover:text-blue-400">Portfolio</a>
          </li>
          <li>
            <a href="gadgets/index.html" class="bg-indigo-500 text-white px-4 py-2 rounded hover:text-blue-400">gadgets</a>
          </li>
          <li><a href="#tools" class="bg-indigo-500 text-white px-4 py-2 rounded hover:text-blue-400">skills</a></li>
          <li><button id="toggle-theme">🌗</button></li>
        </ul>
      </nav>
    </header>);
}