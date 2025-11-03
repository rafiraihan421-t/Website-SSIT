import { dataPengguna} from "./data.js";
const test='Hit'
console.log(test)
 const getInputEmail = document.getElementById('email');
  const getInputPassword = document.getElementById('password');
  const form = document.getElementById('loginForm');
  form.addEventListener('submit', function (e) {
    e.preventDefault()
      const getDataPengguna=dataPengguna.find((val)=>val.email===getInputEmail.value.trim())
;
    if (!getDataPengguna) {
      console.log(getInputEmail.value)
      console.log(dataPengguna)
      console.log(getDataPengguna)
      alert('Email tidak ditemukan');
      return;
    }
    if (getDataPengguna.password!=getInputPassword.value.trim()) {
      alert('Password Salah');
      return;
    }
    document.location.href = 'dashboard.html'; // ganti sesuai halaman tujuan
  });

