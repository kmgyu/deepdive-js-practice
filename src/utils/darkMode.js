// dark/light mode theme setting
function setInitialTheme() {
  const root = document.documentElement;
  if (
    localStorage.theme === 'dark' ||
    (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    root.classList.add('dark');
  } else {
    root.classList.remove('dark');
  }
}

function setupThemeToggle() {
  const toggleBtn = document.getElementById('toggle-theme');
  const root = document.documentElement;

  if (!toggleBtn) return;

  toggleBtn.addEventListener('click', () => {
    const isDark = root.classList.contains('dark');
    if (isDark) {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  setInitialTheme();
  setupThemeToggle();
});

//login message
  document.addEventListener('DOMContentLoaded', () => {
    const loginBtn = document.getElementById('login-btn');
    const nameInput = document.querySelector('input[name="login-name"]');
    const changeTarget = document.getElementById('login-change');

    loginBtn.addEventListener('click', () => {
      const name = nameInput.value.trim();
      nameInput.value = '';
      changeTarget.textContent = name ? `Hello, ${name}` : '이름을 입력해주세요.';
    });
  });
