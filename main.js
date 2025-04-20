// ზედა მენიუს სტილი

fetch('style.json')  // 'colors.json' არის შენი JSON ფაილი
  .then(response => response.json())  // JSON-ად გადაქცევა
  .then(data => {
    // JSON ობიექტის წაკითხვა (მასივი, პირველი ელემენტი)
    const menu = data[0].menu;

    // ფერების წამოღება JSON-დან
    const menuColor = menu.menuColor;
    const menoColor = menu.menoColor;
    const bgColor = menu.bg_color;  // შეცვალე 'withe' შეცდომა -> 'white'
    const textColor = menu.text_color;

    // ამათ გამოყენება CSS ვარიაბლებში
    document.documentElement.style.setProperty('--menu-color', menuColor);
    document.documentElement.style.setProperty('--meno-color', menoColor);
    document.documentElement.style.setProperty('--bg-color', bgColor);  // corrected variable name
    document.documentElement.style.setProperty('--text-color', textColor);
  })
  .catch(error => console.error('Error loading JSON:', error));
// -----------------------------------------------------------
// იუზერის ინფო
document.addEventListener('DOMContentLoaded', () => {
  const userData = localStorage.getItem('loggedInUser');
  const usernameDiv = document.getElementById('username');
  const logoutBtn = document.getElementById('logoutBtn');
  const authLinks = document.getElementById('authLinks');

  if (userData) {
    const user = JSON.parse(userData);
    usernameDiv.textContent = ` ${user.nick_name || user.name || 'მომხმარებელი'}!`;
    logoutBtn.style.display = 'inline-block';
    authLinks.style.display = 'none';
  } else {
    usernameDiv.textContent = '';
    logoutBtn.style.display = 'none';
    authLinks.style.display = 'inline-block';
  }

  // გასვლის ღილაკი
  logoutBtn.addEventListener('click', () => {
    localStorage.removeItem('loggedInUser');
    window.location.reload(); // ან შეგიძლია გააკეთო redirect: window.location.href = 'login.html';
  });
});


document.addEventListener("DOMContentLoaded", () => {
    let edite = document.getElementById('btn_edit+');
    let btn_add_menu = document.getElementById('btn_add_menu');

    if (edite) {
        edite.style.opacity = 1;
    }

    document.querySelectorAll('.del_menu').forEach(btn => {
        btn.addEventListener('click', function () {
            const li = this.closest('li');
            if (li) li.remove();
        });
    });
});

let page = 1;
let loading = false;

function loadMoreContent() {
    if (loading) return;
    loading = true;
    document.getElementById('loader').style.display = 'block';

    // აიწყობა ახალი კონტენტი (აქ დემო-სთვის უბრალოდ ვამატებთ ტექსტს)
    setTimeout(() => {
        const contentBox = document.getElementById('content');
        for (let i = 0; i < 5; i++) {
            const div = document.createElement('div');
            div.className = 'post';
            div.textContent = `Content block ${++page}`;
            contentBox.appendChild(div);
        }
        document.getElementById('loader').style.display = 'none';
        loading = false;
    }, 1000); // ვითომ "იტვირთება"
}

window.addEventListener('scroll', () => {
    const scrollBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 10;
    if (scrollBottom) {
        loadMoreContent();
    }
});
// გასვლა სისტემიდან
document.getElementById('logoutBtn').addEventListener('click', () => {
  localStorage.removeItem('loggedInUser'); // წაშლა
  window.location.href = 'login.html';     // უკან დაბრუნება
});
// იუზერი
const userData = localStorage.getItem('loggedInUser');
if (userData) {
  const user = JSON.parse(userData);

  if (user.role === 'admin') {
    console.log('🔐 ეს არის ადმინი');
    // აჩვენე admin panel ან სხვა ფუნქციები
  } else if (user.role === 'user') {
    console.log('👤 ეს არის რეგისტრირებული მომხმარებელი');
  }
} else {
  console.log('🕵️ სტუმარია, role: guest');
}
