const toggleButton = document.getElementById('theme-toggle');
toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('light-theme');
});

const clock = document.getElementById('clock');
// const clock = document.querySelector('#clock')

const datediv = document.createElement('div');
datediv.id = 'date';
document.body.insertBefore(datediv, document.body.firstChild);

setInterval(function () {
  let now = new Date();
  // console.log(date.toLocaleTimeString);
  clock.innerHTML = now.toLocaleTimeString();
  datediv.innerHTML = now.toLocaleDateString();
}, 1000);

const banner = document.getElementById('banner');
const hour = new Date().getHours();
if (hour < 12) {
  banner.innerHTML = '<span>Good Morning!</span>';
} else if (hour < 18) {
  banner.innerHTML = '<span>Good Afternoon!</span>';
} else {
  banner.innerHTML = '<span>Good Evening!</span>';
}

