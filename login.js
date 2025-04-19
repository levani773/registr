const form = document.getElementById('loginForm');
const message = document.getElementById('message');

// შენი Render API URL
const API_URL = 'https://json-server-api-gye4.onrender.com/users';

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    try {
        // წავშლოთ ყველა მომხმარებელი და შევამოწმოთ, იპოვება თუ არა შესაბამისი
        const res = await fetch(API_URL);
        const users = await res.json();

        // მოძებნე მომხმარებელი, რომლის ელ.ფოსტა და პაროლი ემთხვევა
        const user = users.find(user => user.email === email && user.password === password);

        if (user) {
            message.textContent = "შესვლა წარმატებულია! ✅";
        } else {
            message.textContent = "ელ.ფოსტა ან პაროლი არასწორია ❌";
        }
    } catch (err) {
        message.textContent = "სერვერთან კავშირის პრობლემა 😞";
    }
});

if (user) {
    message.textContent = "შესვლა წარმატებულია! ✅";
    
    // შენახვა localStorage-ში
    localStorage.setItem('loggedInUser', JSON.stringify(user));

    // გადამისამართება დეშბორდზე
    window.location.href = "dashboard.html"; // ან სხვა რომელიმე გვერდზე
} else {
    message.textContent = "ელ.ფოსტა ან პაროლი არასწორია ❌";
}
