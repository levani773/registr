const form = document.getElementById('loginForm');
const message = document.getElementById('message');

// შენი JSON Server API
const API_URL = 'https://json-server-api-gye4.onrender.com/users';

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();

  try {
    const res = await fetch(API_URL);
    const users = await res.json();

    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
      message.textContent = "შესვლა წარმატებულია! ✅";

      // შეინახე მომხმარებელი localStorage-ში
      localStorage.setItem('loggedInUser', JSON.stringify(user));

      // გადამისამართება დეშბორდზე ან მთავარ გვერდზე
      window.location.href = "index.html"; // ან "index.html"
    } else {
      message.textContent = "ელ.ფოსტა ან პაროლი არასწორია ❌";
    }
  } catch (err) {
    message.textContent = "სერვერთან კავშირის პრობლემა 😞";
    console.error(err);
  }
});
// ვინახავთ იუზერს ლოცალსტორიჯში
localStorage.setItem('loggedInUser', JSON.stringify(user));
