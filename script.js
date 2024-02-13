// JavaScriptコードをここに追加

// 例: ナビゲーションメニューのスクロールアニメーション
const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        window.scrollTo({
            top: targetSection.offsetTop - 100,
            behavior: 'smooth'
        });
    });
});
