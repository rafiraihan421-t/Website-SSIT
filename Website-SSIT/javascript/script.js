const test='Hit'
console.log(test)
 const getInputEmail = document.getElementById('email');
  const getInputPassword = document.getElementById('password');
  const form = document.getElementById('loginForm');

  // Regex sederhana
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^[A-Za-z0-9!@#\$%\^&\*]{6,}$/; // minimal 6 karakter
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const email = getInputEmail.value.trim();
    const password = getInputPassword.value.trim();
    if (!emailRegex.test(email)) {
      alert('Email tidak valid! Contoh: user@example.com');
      return;
    }
    if (!passwordRegex.test(password)) {
      alert('Password minimal 6 karakter, hanya huruf, angka, atau simbol !@#$%^&*');
      return;
    }
    document.location.href = 'dashboard.html'; // ganti sesuai halaman tujuan
  });

