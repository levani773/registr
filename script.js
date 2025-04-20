const form = document.getElementById('registerForm');
const message = document.getElementById('message');

// შეცვალე ეს შენი Render API მისამართით
const API_URL = 'https://json-server-api-gye4.onrender.com/users';

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const user = {
    name: document.getElementById('name').value.trim(),
    name: document.getElementById('last_name').value.trim(),
    name: document.getElementById('nick_name').value.trim(),
    email: document.getElementById('email').value.trim(),
    password: document.getElementById('password').value.trim()
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
      message.textContent = "რეგისტრაცია წარმატებულია! ✅";
      form.reset();
    } else {
      message.textContent = "დაფიქსირდა შეცდომა ❌";
    }
  } catch (err) {
    message.textContent = "სერვერთან კავშირის პრობლემა 😞";
  }
});
