const getTextGreeting = document.getElementsByClassName('text-greeting');
const date = new Date();
const hour = date.getHours();
let greetingText = '';
if (hour >= 4 && hour < 11) {
  greetingText = 'Selamat pagi 🌞';
} else if (hour >= 11 && hour < 15) {
  greetingText = 'Selamat siang ☀️';
} else if (hour >= 15 && hour < 18) {
  greetingText = 'Selamat sore 🌇';
} else {
  greetingText = 'Selamat malam 🌙';
}
for (let i = 0; i < getTextGreeting.length; i++) {
  getTextGreeting[i].textContent = greetingText;
}