const celebrations = {
  "1-1": "Happy New Year! 🎊🎍",
  "26-1": "🇮🇳 Happy Republic Day!",
  "15-8": "🇮🇳 Happy Independence Day!",
  "25-12": "🎄 Merry Christmas!",
  "30-12": "Almost New Year! 🎊🎉",
};

const notification = document.getElementById("dateNotification");
const messageEl = document.getElementById("celebrationMessage");

const today = new Date();
const todayKey = `${today.getDate()}-${today.getMonth() + 1}`;

if (celebrations[todayKey]) {
  messageEl.textContent = celebrations[todayKey];
  notification.classList.remove("hidden");

  setTimeout(() => {
    closeNotification();
  }, 7000);
}

function closeNotification() {
  notification.classList.add("opacity-0", "-translate-x-5");
  setTimeout(() => {
    notification.classList.add("hidden");
  }, 300);
}

window.closeNotification = closeNotification;
