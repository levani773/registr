const form = document.getElementById('registerForm');

const API_URL = 'https://json-server-api-gye4.onrender.com/users';

form.addEventListener('submit', async (e) => {
  e.preventDefault();
const user = {
  name: document.getElementById('name').value.trim(),
  last_name: document.getElementById('last_name').value.trim(),
  nick_name: document.getElementById('nick_name').value.trim(),
  email: document.getElementById('email').value.trim(),
  password: document.getElementById('password').value.trim(),
  role: 'user' // ✅ აქ ვუნიშნავთ რომ ეს არის ჩვეულებრივი მომხმარებელი
};

  try {
    const res = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    });

    if (res.ok) {
      // რეგისტრაცია წარმატებულია → მთავარ გვერდზე გადადით
      window.location.href = "index.html"; // ან main.html თუ ეგ გინდა
    } else {
      alert("რეგისტრაცია ვერ განხორციელდა ❌");
    }
  } catch (error) {
    alert("სერვერთან კავშირის შეცდომა 😞");
  }
});
